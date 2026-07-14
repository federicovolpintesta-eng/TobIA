from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from surveys.models import Hotel
from reputation.models import ExternalReview

class ReputationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.hotel = Hotel.objects.create(name="Test Hotel", location="Buenos Aires")
        
        # 8/10 on Booking (80%)
        ExternalReview.objects.create(
            hotel=self.hotel,
            source=ExternalReview.Source.BOOKING,
            rating=8.0,
            max_rating=10.0,
            posted_date='2026-06-01'
        )
        
        # 5/5 on TripAdvisor (100%)
        ExternalReview.objects.create(
            hotel=self.hotel,
            source=ExternalReview.Source.TRIPADVISOR,
            rating=5.0,
            max_rating=5.0,
            posted_date='2026-06-02'
        )

    def test_iro_analytics_endpoint(self):
        url = reverse('analytics-reputation')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Avg of 80% and 100% = 90%
        self.assertEqual(response.data['iro_score'], 90.0)
        self.assertEqual(response.data['total_reviews'], 2)
