from django.test import TestCase
from surveys.models import Hotel, SurveyTemplate, GuestStay, SurveyResponse
from tickets.models import IncidentTicket

class TicketTests(TestCase):
    def setUp(self):
        self.hotel = Hotel.objects.create(name="Test Hotel", location="Buenos Aires")
        self.template = SurveyTemplate.objects.create(title="Test Survey")
        self.stay = GuestStay.objects.create(
            hotel=self.hotel,
            guest_name="John Doe",
            room_number="101",
            check_out_date="2026-06-05",
            pms_reservation_id="TEST-124"
        )
        self.response = SurveyResponse.objects.create(
            survey_template=self.template,
            guest_stay=self.stay
        )

    def test_ticket_creation(self):
        ticket = IncidentTicket.objects.create(
            survey_response=self.response,
            priority=IncidentTicket.Priority.HIGH
        )
        
        self.assertEqual(ticket.status, IncidentTicket.Status.OPEN)
        self.assertEqual(ticket.priority, IncidentTicket.Priority.HIGH)
        self.assertEqual(IncidentTicket.objects.count(), 1)
