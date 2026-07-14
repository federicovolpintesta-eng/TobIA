from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IncidentTicketViewSet

router = DefaultRouter()
router.register(r'tickets', IncidentTicketViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
