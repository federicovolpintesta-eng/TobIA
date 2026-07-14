from django.db import models
import uuid
from surveys.models import Hotel

class WhatsAppChat(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    guest_phone = models.CharField(max_length=20)
    guest_name = models.CharField(max_length=150, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ChatMessage(models.Model):
    class Sender(models.TextChoices):
        GUEST = 'GUEST', 'Huésped'
        BOT = 'BOT', 'AI Concierge'
        HUMAN = 'HUMAN', 'Agente Humano'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    chat = models.ForeignKey(WhatsAppChat, on_delete=models.CASCADE, related_name='messages')
    sender = models.CharField(max_length=10, choices=Sender.choices)
    message_text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
