from rest_framework import serializers
from .models import ExternalReview

class ExternalReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExternalReview
        fields = '__all__'
