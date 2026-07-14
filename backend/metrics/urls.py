from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DailyMetricViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r'financials', DailyMetricViewSet, basename='financials')

urlpatterns = [
    path('', include(router.urls)),
]
