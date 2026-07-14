from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Avg, Count
from .models import ExternalReview
from .serializers import ExternalReviewSerializer

class ExternalReviewViewSet(viewsets.ModelViewSet):
    queryset = ExternalReview.objects.all()
    serializer_class = ExternalReviewSerializer
    filterset_fields = ['source', 'hotel']

class ReputationAnalyticsView(APIView):
    def get(self, request):
        reviews = ExternalReview.objects.all()
        total_reviews = reviews.count()
        
        # Calcular IRO (Índice de Reputación Online) normalizado a 100
        if total_reviews == 0:
            return Response({"iro_score": 0, "total_reviews": 0})
            
        total_normalized = sum([r.normalized_rating() for r in reviews])
        iro_score = total_normalized / total_reviews

        return Response({
            "iro_score": round(iro_score, 2),
            "total_reviews": total_reviews
        })
