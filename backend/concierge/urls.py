from django.urls import path
from .views import ConciergeMessageView

urlpatterns = [
    path('concierge/guest-messages', ConciergeMessageView.as_view(), name='concierge-analyze'),
]
