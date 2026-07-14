import uuid
from django.test import TestCase
from surveys.models import Hotel, Department, SurveyTemplate, Question, GuestStay, SurveyResponse, Answer
from surveys.services import analyze_sentiment

class NLPTests(TestCase):
    def setUp(self):
        self.hotel = Hotel.objects.create(name="Test Hotel", location="Buenos Aires")
        self.department = Department.objects.create(name="General")
        self.template = SurveyTemplate.objects.create(title="Test Survey", is_active=True)
        
        self.question = Question.objects.create(
            survey_template=self.template,
            department=self.department,
            text="Leave a comment",
            question_type='OPEN_TEXT'
        )
        
        self.stay = GuestStay.objects.create(
            hotel=self.hotel,
            guest_name="John Doe",
            room_number="101",
            check_out_date="2026-06-05",
            pms_reservation_id="TEST-123"
        )
        
        self.response = SurveyResponse.objects.create(
            survey_template=self.template,
            guest_stay=self.stay
        )

    def test_sentiment_positive(self):
        Answer.objects.create(
            survey_response=self.response,
            question=self.question,
            text_value="The stay was absolutely amazing and wonderful! I loved it."
        )
        analyze_sentiment(self.response)
        self.assertEqual(self.response.sentiment_label, 'POSITIVE')
        self.assertGreater(self.response.sentiment_score, 0)

    def test_sentiment_negative(self):
        Answer.objects.create(
            survey_response=self.response,
            question=self.question,
            text_value="Terrible experience. The room was dirty and the food was awful."
        )
        analyze_sentiment(self.response)
        self.assertEqual(self.response.sentiment_label, 'NEGATIVE')
        self.assertLess(self.response.sentiment_score, 0)
