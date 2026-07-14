from django.contrib import admin
from .models import WhatsAppChat, ChatMessage

@admin.register(WhatsAppChat)
class WhatsAppChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'hotel', 'guest_phone', 'guest_name', 'is_active', 'created_at')

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('chat', 'sender', 'message_text', 'timestamp')
