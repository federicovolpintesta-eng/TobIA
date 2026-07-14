from django.contrib import admin
from .models import IncidentTicket

@admin.register(IncidentTicket)
class IncidentTicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'status', 'priority', 'assigned_to', 'created_at')
    list_filter = ('status', 'priority', 'created_at')
    search_fields = ('id', 'resolution_notes')
