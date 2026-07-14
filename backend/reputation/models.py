from django.db import models
import uuid
from surveys.models import Hotel

class ExternalReview(models.Model):
    class Source(models.TextChoices):
        BOOKING = 'BOOKING', 'Booking.com'
        TRIPADVISOR = 'TRIPADVISOR', 'TripAdvisor'
        EXPEDIA = 'EXPEDIA', 'Expedia'
        GOOGLE = 'GOOGLE', 'Google Reviews'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='external_reviews')
    source = models.CharField(max_length=20, choices=Source.choices)
    rating = models.DecimalField(max_digits=3, decimal_places=1) # ej 8.5, 4.0
    max_rating = models.DecimalField(max_digits=3, decimal_places=1, default=10.0) # Booking es /10, Tripadvisor es /5
    review_text = models.TextField(blank=True, null=True)
    author_name = models.CharField(max_length=150, blank=True, null=True)
    posted_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def normalized_rating(self):
        """Devuelve el rating normalizado a escala de 0 a 100%"""
        return (self.rating / self.max_rating) * 100

    def __str__(self):
        return f"{self.source} - {self.rating}/{self.max_rating} en {self.hotel.name}"
