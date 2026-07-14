from django.db import models
from django.contrib.auth.models import User
import uuid
from surveys.models import SurveyResponse

class IncidentTicket(models.Model):
    class Status(models.TextChoices):
        OPEN = 'OPEN', 'Abierto'
        IN_PROGRESS = 'IN_PROGRESS', 'En Progreso'
        RESOLVED = 'RESOLVED', 'Resuelto'
        CLOSED = 'CLOSED', 'Cerrado'

    class Priority(models.TextChoices):
        LOW = 'LOW', 'Baja'
        MEDIUM = 'MEDIUM', 'Media'
        HIGH = 'HIGH', 'Alta'
        CRITICAL = 'CRITICAL', 'Crítica'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    survey_response = models.OneToOneField(SurveyResponse, on_delete=models.CASCADE, related_name='ticket')
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.OPEN)
    priority = models.CharField(max_length=20, choices=Priority.choices, default=Priority.MEDIUM)
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_tickets')
    resolution_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Ticket {self.id} - {self.status}"
