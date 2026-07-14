from rest_framework import serializers
from .models import IncidentTicket

class IncidentTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidentTicket
        fields = '__all__'
