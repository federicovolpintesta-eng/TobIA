from django.contrib import admin
from .models import DailyMetric, MetricSegment

@admin.register(DailyMetric)
class DailyMetricAdmin(admin.ModelAdmin):
    list_display = ('date', 'nps', 'adr', 'goppar', 'revpar', 'trevpar', 'gop', 'los')
    search_fields = ('date',)
    list_filter = ('date',)

@admin.register(MetricSegment)
class MetricSegmentAdmin(admin.ModelAdmin):
    list_display = ('date', 'channel', 'room_type', 'segment', 'adr', 'revpar', 'nps_score')
    search_fields = ('date', 'channel', 'room_type', 'segment')
    list_filter = ('date', 'channel', 'room_type', 'segment')
