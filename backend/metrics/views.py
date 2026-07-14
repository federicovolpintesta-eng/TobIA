from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Avg
from .models import DailyMetric, MetricSegment
from .serializers import DailyMetricSerializer

class DailyMetricViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    serializer_class = DailyMetricSerializer

    def get_queryset(self):
        queryset = DailyMetric.objects.all()
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        
        if start_date:
            queryset = queryset.filter(date__gte=start_date)
        if end_date:
            queryset = queryset.filter(date__lte=end_date)
            
        return queryset

    @action(detail=False, methods=['get'])
    def explore(self, request):
        metric = request.query_params.get('metric', 'adr')
        breakdown = request.query_params.get('breakdown', 'channel')
        cross_with = request.query_params.get('cross_with', 'nps_score')
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')
        
        valid_breakdowns = ['channel', 'room_type', 'segment']
        valid_metrics = ['adr', 'revpar', 'nps_score']
        
        if breakdown not in valid_breakdowns:
            breakdown = 'channel'
        if metric not in valid_metrics:
            metric = 'adr'
        if cross_with not in valid_metrics:
            cross_with = 'nps_score'
            
        qs = MetricSegment.objects.all()
        if start_date:
            qs = qs.filter(date__gte=start_date)
        if end_date:
            qs = qs.filter(date__lte=end_date)
            
        data = qs.values(breakdown).annotate(
            primary_value=Avg(metric),
            cross_value=Avg(cross_with)
        )
        
        return Response({
            "breakdown": breakdown,
            "primary_metric": metric,
            "cross_metric": cross_with,
            "results": list(data)
        })

    @action(detail=False, methods=['post'])
    def upload(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({'error': 'No file provided'}, status=400)
            
        try:
            import openpyxl
            from decimal import Decimal
            from datetime import datetime
            
            wb = openpyxl.load_workbook(file, data_only=True)
            sheet = wb.active
            
            headers = [str(cell.value).strip() if cell.value else '' for cell in sheet[1]]
            
            # Map column names
            idx_date = headers.index('Fecha') if 'Fecha' in headers else -1
            idx_room_rev = headers.index('Ingresos Habitaciones') if 'Ingresos Habitaciones' in headers else -1
            idx_fb_rev = headers.index('Ingresos F&B') if 'Ingresos F&B' in headers else -1
            idx_exp = headers.index('Total Gastos Operativos') if 'Total Gastos Operativos' in headers else -1
            idx_avail = headers.index('Habitaciones Disponibles') if 'Habitaciones Disponibles' in headers else -1
            idx_occ = headers.index('Habitaciones Ocupadas') if 'Habitaciones Ocupadas' in headers else -1
            
            if -1 in [idx_date, idx_room_rev, idx_exp, idx_avail, idx_occ]:
                return Response({'error': 'Faltan columnas requeridas en el archivo.'}, status=400)
                
            def clean_val(val, default=0):
                if val is None: return default
                s = str(val).strip().lower()
                if s in ('nan', 'na', '', 'null'): return default
                try:
                    return float(val)
                except ValueError:
                    return default
                    
            processed_count = 0
            for row in sheet.iter_rows(min_row=2):
                if not row[idx_date].value or str(row[idx_date].value).lower() == 'nan':
                    continue
                    
                date_val = row[idx_date].value
                try:
                    if isinstance(date_val, datetime):
                        parsed_date = date_val.date()
                    else:
                        parsed_date = datetime.strptime(str(date_val).split(' ')[0], '%Y-%m-%d').date()
                except Exception:
                    continue # Skip invalid dates
                    
                room_rev = Decimal(str(clean_val(row[idx_room_rev].value)))
                fb_rev = Decimal(str(clean_val(row[idx_fb_rev].value))) if idx_fb_rev != -1 else Decimal(0)
                total_rev = room_rev + fb_rev
                
                expenses = Decimal(str(clean_val(row[idx_exp].value)))
                avail_rooms = int(clean_val(row[idx_avail].value, default=1))
                occ_rooms = int(clean_val(row[idx_occ].value, default=1))
                
                if avail_rooms <= 0: avail_rooms = 1
                
                # Calculations
                gop = total_rev - expenses
                goppar = gop / avail_rooms
                adr = room_rev / occ_rooms if occ_rooms > 0 else Decimal(0)
                revpar = room_rev / avail_rooms
                trevpar = total_rev / avail_rooms
                
                metric, created = DailyMetric.objects.update_or_create(
                    date=parsed_date,
                    defaults={
                        'adr': adr,
                        'revpar': revpar,
                        'trevpar': trevpar,
                        'gop': gop,
                        'goppar': goppar
                    }
                )
                processed_count += 1
                
            return Response({'message': f'{processed_count} días procesados correctamente.'})
        except Exception as e:
            return Response({'error': str(e)}, status=500)

