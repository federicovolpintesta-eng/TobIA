from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExternalReviewViewSet, ReputationAnalyticsView

router = DefaultRouter()
router.register(r'reviews', ExternalReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('hotel-data', ReputationAnalyticsView.as_view(), name='analytics-reputation'),
]
