from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny # Assuming token logic is verified elsewhere, or we use IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Empleado
from .serializers import EmpleadoSerializer
from surveys.models import Hotel
import csv
import io
import openpyxl

# We should ideally use IsAuthenticated, but for this migration let's allow or use simple check
@api_view(['GET'])
@permission_classes([AllowAny])
def empleados_list(request):
    hotel = Hotel.objects.first() # Simplification for single-tenant MVP
    if not hotel:
        hotel = Hotel.objects.create(name="Default Hotel")
    
    empleados = Empleado.objects.filter(hotel=hotel)
    
    # Map rendimiento_nps to nps_global for frontend compatibility
    data = []
    for emp in empleados:
        data.append({
            'id': emp.id,
            'nombre': emp.nombre,
            'rol': emp.rol,
            'tipo_perfil': emp.tipo_perfil,
            'fecha_ingreso': emp.fecha_ingreso,
            'nps_global': emp.rendimiento_nps
        })
    return Response(data)

@api_view(['POST'])
@permission_classes([AllowAny])
def empleado_create(request):
    hotel = Hotel.objects.first()
    if not hotel:
        hotel = Hotel.objects.create(name="Default Hotel")
        
    nombre = request.data.get('nombre')
    rol = request.data.get('rol')
    tipo_perfil = request.data.get('tipo_perfil', 'Estándar')
    
    # cv file processing omitted for brevity
    
    emp = Empleado.objects.create(
        hotel=hotel,
        nombre=nombre,
        rol=rol,
        tipo_perfil=tipo_perfil
    )
    return Response({'status': 'ok', 'id': emp.id}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def empleados_import(request):
    hotel = Hotel.objects.first()
    if not hotel:
        hotel = Hotel.objects.create(name="Default Hotel")

    file_obj = request.FILES.get('file')
    if not file_obj:
        return Response({'error': 'No file uploaded'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        if file_obj.name.endswith('.csv'):
            decoded_file = file_obj.read().decode('utf-8')
            io_string = io.StringIO(decoded_file)
            reader = csv.DictReader(io_string)
            for row in reader:
                Empleado.objects.create(
                    hotel=hotel,
                    nombre=row.get('nombre', 'Desconocido'),
                    rol=row.get('rol', 'Sin Rol'),
                    tipo_perfil=row.get('tipo_perfil', 'Estándar')
                )
        elif file_obj.name.endswith('.xlsx'):
            wb = openpyxl.load_workbook(file_obj)
            sheet = wb.active
            headers = [cell.value for cell in sheet[1]]
            for row in sheet.iter_rows(min_row=2, values_only=True):
                data = dict(zip(headers, row))
                Empleado.objects.create(
                    hotel=hotel,
                    nombre=data.get('nombre', 'Desconocido'),
                    rol=data.get('rol', 'Sin Rol'),
                    tipo_perfil=data.get('tipo_perfil', 'Estándar')
                )
        return Response({'status': 'imported'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
