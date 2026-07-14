from django.db import models
import uuid

class Hotel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True, null=True)
    timezone = models.CharField(max_length=50, default="UTC")

    def __str__(self):
        return self.name

class Department(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class SurveyTemplate(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Question(models.Model):
    class QuestionType(models.TextChoices):
        NPS = 'NPS', 'Net Promoter Score (0-10)'
        CSAT = 'CSAT', 'Customer Satisfaction (1-5)'
        OPEN_TEXT = 'OPEN_TEXT', 'Pregunta Abierta'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    survey_template = models.ForeignKey(SurveyTemplate, on_delete=models.CASCADE, related_name='questions')
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True, related_name='questions')
    text = models.TextField()
    question_type = models.CharField(max_length=20, choices=QuestionType.choices)

    def __str__(self):
        return f"{self.text[:50]} ({self.question_type})"

class GuestStay(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='stays')
    guest_name = models.CharField(max_length=255)
    guest_email = models.EmailField(blank=True, null=True)
    room_number = models.CharField(max_length=50, blank=True, null=True)
    check_out_date = models.DateField()
    pms_reservation_id = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.guest_name} - {self.room_number} ({self.hotel.name})"

class QRCode(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    location_name = models.CharField(max_length=100) # Ej: "Mesa 15", "Recepción 2"
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"QR: {self.location_name} - {self.hotel.name}"

class SurveyResponse(models.Model):
    class SurveyOrigin(models.TextChoices):
        ONSITE = 'ONSITE', 'En Sitio (Código QR)'
        FOLLOWUP = 'FOLLOWUP', 'Post-estadía (Email)'

    class SurveyStatus(models.TextChoices):
        NEW = 'NEW', 'Nuevas (Bandeja de Entrada)'
        REVIEW = 'REVIEW', 'Bajo Revisión'
        ACTION_REQUIRED = 'ACTION_REQUIRED', 'Acción Requerida'
        RESOLVED = 'RESOLVED', 'Resueltas'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    survey_origin = models.CharField(max_length=20, choices=SurveyOrigin.choices, default=SurveyOrigin.FOLLOWUP)
    status = models.CharField(max_length=20, choices=SurveyStatus.choices, default=SurveyStatus.NEW)
    guest_stay = models.ForeignKey(GuestStay, on_delete=models.CASCADE, related_name='survey_responses', null=True, blank=True)
    qr_code = models.ForeignKey(QRCode, on_delete=models.SET_NULL, null=True, blank=True)
    survey_template = models.ForeignKey(SurveyTemplate, on_delete=models.CASCADE)
    submitted_at = models.DateTimeField(auto_now_add=True)

    # NLP Semantic Analysis
    sentiment_score = models.FloatField(null=True, blank=True, help_text="VADER compound score from -1.0 to 1.0")
    sentiment_label = models.CharField(max_length=20, null=True, blank=True) # POSITIVE, NEUTRAL, NEGATIVE

    def __str__(self):
        return f"Response to {self.survey_template.title} at {self.submitted_at}"

class Answer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    survey_response = models.ForeignKey(SurveyResponse, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    score_value = models.IntegerField(null=True, blank=True)
    text_value = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Answer to {self.question.id} in response {self.survey_response.id}"
