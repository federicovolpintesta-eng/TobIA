import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from surveys.models import Hotel, SurveyTemplate, Question, GuestStay, SurveyResponse, Answer
from tickets.models import IncidentTicket
from reputation.models import ExternalReview
from surveys.services import analyze_sentiment
from django.contrib.auth.models import User

def seed():
    # Clean DB
    Hotel.objects.all().delete()
    User.objects.all().delete()

    admin_user = User.objects.create_superuser('admin', 'admin@example.com', 'admin')

    hotel = Hotel.objects.create(name="Los Pinos Resort & Spa Termal", location="Termas de Río Hondo")
    template = SurveyTemplate.objects.create(title="Encuesta Post-Estadía", is_active=True)
    
    q_nps = Question.objects.create(survey_template=template, text="¿Qué tan probable es que nos recomiendes?", question_type='NPS')
    q_open = Question.objects.create(survey_template=template, text="¿Qué podríamos mejorar?", question_type='OPEN_TEXT')

    # Seed 3 Guests
    guests = [
        ("Carlos Mendoza", "101", 10, "Excelente estadía. El personal de recepción fue muy amable.", IncidentTicket.Status.CLOSED),
        ("Elena Suárez", "105", 2, "La limpieza dejó mucho que desear. Había polvo y toallas húmedas.", IncidentTicket.Status.OPEN),
        ("Martín Rivas", "501", 5, "Demasiado tiempo esperando el check-in. La cena tardó mucho.", IncidentTicket.Status.IN_PROGRESS),
    ]

    for name, room, nps, comment, ticket_status in guests:
        stay = GuestStay.objects.create(
            hotel=hotel, guest_name=name, room_number=room, 
            check_out_date="2026-06-20", pms_reservation_id=f"RES-{room}"
        )
        response = SurveyResponse.objects.create(survey_template=template, guest_stay=stay)
        
        Answer.objects.create(survey_response=response, question=q_nps, score_value=nps)
        Answer.objects.create(survey_response=response, question=q_open, text_value=comment)
        
        analyze_sentiment(response)
        
        # Si es detractor (<=6), crear ticket
        if nps <= 6:
            IncidentTicket.objects.create(
                survey_response=response,
                status=ticket_status,
                priority=IncidentTicket.Priority.HIGH if nps <= 3 else IncidentTicket.Priority.MEDIUM,
                assigned_to=admin_user
            )

    # Seed Reputation
    ExternalReview.objects.create(hotel=hotel, source=ExternalReview.Source.BOOKING, rating=8.5, max_rating=10.0, posted_date='2026-06-21', author_name="Ana L.")
    ExternalReview.objects.create(hotel=hotel, source=ExternalReview.Source.TRIPADVISOR, rating=4.0, max_rating=5.0, posted_date='2026-06-22', author_name="ViajeroFrecuente")
    ExternalReview.objects.create(hotel=hotel, source=ExternalReview.Source.GOOGLE, rating=3.5, max_rating=5.0, posted_date='2026-06-23', author_name="Roberto Gomez")

    print("✅ Database Seeded Successfully!")

if __name__ == "__main__":
    seed()
