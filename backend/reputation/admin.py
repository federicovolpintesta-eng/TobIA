from django.contrib import admin
from .models import ExternalReview

@admin.register(ExternalReview)
class ExternalReviewAdmin(admin.ModelAdmin):
    list_display = ('source', 'hotel', 'rating', 'max_rating', 'posted_date')
    list_filter = ('source', 'hotel')
    search_fields = ('author_name', 'review_text')
