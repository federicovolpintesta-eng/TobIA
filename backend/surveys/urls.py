from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HotelViewSet, SurveyTemplateViewSet, SubmitSurveyView, AnalyticsDashboardView, GuestStayViewSet, UserViewSet, SurveyResponseViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r'hotels', HotelViewSet)
router.register(r'templates', SurveyTemplateViewSet)
router.register(r'guests', GuestStayViewSet)
router.register(r'users', UserViewSet)
router.register(r'guest-feedback', SurveyResponseViewSet, basename='responses')


urlpatterns = [
    path('', include(router.urls)),
    path('submit/', SubmitSurveyView.as_view(), name='submit-survey'),
    path('analytics/dashboard/', AnalyticsDashboardView.as_view(), name='analytics-dashboard'),
]
