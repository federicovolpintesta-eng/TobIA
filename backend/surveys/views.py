from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Hotel, Department, SurveyTemplate, Question, SurveyResponse, GuestStay
from .serializers import (
    HotelSerializer, DepartmentSerializer, SurveyTemplateSerializer,
    QuestionSerializer, SurveyResponseCreateSerializer,
    SurveyResponseSerializer,
    GuestStaySerializer, UserSerializer
)
from .services import calculate_nps_metric

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

import pandas as pd
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Hotel, Department, SurveyTemplate, Question, SurveyResponse, GuestStay

class GuestStayViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = GuestStay.objects.all()
    serializer_class = GuestStaySerializer

    @action(detail=False, methods=['post'], parser_classes=[MultiPartParser, FormParser])
    def import_excel(self, request):
        file = request.FILES.get('file')
        hotel_id = request.data.get('hotel')
        if not file or not hotel_id:
            return Response({"error": "Falta archivo u hotel"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            hotel = Hotel.objects.get(id=hotel_id)
            if file.name.endswith('.csv'):
                df = pd.read_csv(file)
            else:
                df = pd.read_excel(file)
            
            # Asumimos columnas: name, email, room, checkout, pms_id
            total_count = 0
            valid_count = 0
            invalid_count = 0
            
            for _, row in df.iterrows():
                total_count += 1
                email = str(row.get('email', '')).strip()
                if email.lower() == 'nan' or not email:
                    email = None
                    invalid_count += 1
                else:
                    valid_count += 1
                    
                import uuid
                pms_id = str(row.get('pms_id', ''))
                if pms_id.lower() == 'nan' or not pms_id:
                    pms_id = f"sys-{uuid.uuid4().hex[:8]}"

                GuestStay.objects.update_or_create(
                    pms_reservation_id=pms_id,
                    defaults={
                        'hotel': hotel,
                        'guest_name': str(row.get('name', 'Desconocido')),
                        'guest_email': email,
                        'room_number': str(row.get('room', '')),
                        'check_out_date': row.get('checkout') if str(row.get('checkout')).lower() != 'nan' else '2026-01-01',
                    }
                )
            
            return Response({
                "total": total_count,
                "valid": valid_count,
                "invalid": invalid_count,
                "message": f"{total_count} procesados"
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        return []

class SurveyTemplateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SurveyTemplate.objects.filter(is_active=True)
    serializer_class = SurveyTemplateSerializer

class SurveyResponseViewSet(viewsets.ModelViewSet):
    queryset = SurveyResponse.objects.prefetch_related('answers__question', 'guest_stay').all().order_by('-submitted_at')
    serializer_class = SurveyResponseSerializer
    # permission_classes = [IsAuthenticated]

import requests

class SubmitSurveyView(APIView):
    def post(self, request):
        # Manejo de la nueva estructura v2 desde Next.js
        # { guestName, lastName, checkIn, checkOut, roomNumber, nps, comment }
        data = request.data
        nps = data.get('nps')
        
        try:
            nps_val = int(nps) if nps is not None else 10
        except ValueError:
            nps_val = 10

        # Si el NPS es 3 o menor (Detractor grave), enviar webhook al simulador
        if nps_val <= 3:
            try:
                webhook_data = {
                    "surveyId": "12345",
                    "guestName": f"{data.get('guestName', 'Huésped')} {data.get('lastName', '')}",
                    "roomNumber": data.get('roomNumber', 'N/A'),
                    "nps": nps_val,
                    "comment": data.get('comment', 'Sin comentarios')
                }
                # Intentar enviar al simulador
                requests.post('http://localhost:3001/api/webhook/survey_crisis', json=webhook_data, timeout=2)
            except Exception as e:
                print("Error sending webhook to simulator:", e)
        
        # Por ahora para el MVP, simplemente aceptamos la data
        return Response({"status": "success", "message": "Encuesta procesada exitosamente"}, status=status.HTTP_201_CREATED)

class AnalyticsDashboardView(APIView):
    def get(self, request):
        # Métrica Global de NPS
        # Extraemos todos los puntajes de respuestas de NPS
        nps_answers = []
        # Asumimos que filtramos por tipo de pregunta NPS
        responses = SurveyResponse.objects.prefetch_related('answers__question').all()
        for response in responses:
            for answer in response.answers.all():
                if answer.question.question_type == 'NPS' and answer.score_value is not None:
                    nps_answers.append(answer.score_value)
        
        nps_metrics = calculate_nps_metric(nps_answers)
        
        # En una versión real, aquí también calcularíamos CSAT, filtraríamos por fecha y hotel.
        return Response({
            "global_nps": nps_metrics,
            "total_surveys": responses.count()
        })
