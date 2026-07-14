from rest_framework import viewsets
from .models import IncidentTicket
from .serializers import IncidentTicketSerializer

class IncidentTicketViewSet(viewsets.ModelViewSet):
    queryset = IncidentTicket.objects.all()
    serializer_class = IncidentTicketSerializer
    # Podríamos añadir django-filter para búsquedas avanzadas
