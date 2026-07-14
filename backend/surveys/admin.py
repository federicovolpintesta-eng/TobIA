from django.contrib import admin
from .models import Hotel, Department, SurveyTemplate, Question, GuestStay, SurveyResponse, Answer

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'timezone')
    search_fields = ('name',)

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

@admin.register(SurveyTemplate)
class SurveyTemplateAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title',)
    inlines = [QuestionInline]

@admin.register(GuestStay)
class GuestStayAdmin(admin.ModelAdmin):
    list_display = ('guest_name', 'hotel', 'room_number', 'check_out_date', 'pms_reservation_id')
    list_filter = ('hotel', 'check_out_date')
    search_fields = ('guest_name', 'guest_email', 'pms_reservation_id')

class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 0
    readonly_fields = ('question', 'score_value', 'text_value')
    can_delete = False

@admin.register(SurveyResponse)
class SurveyResponseAdmin(admin.ModelAdmin):
    list_display = ('guest_stay', 'survey_template', 'submitted_at')
    list_filter = ('survey_template', 'submitted_at')
    search_fields = ('guest_stay__guest_name', 'guest_stay__guest_email')
    inlines = [AnswerInline]
    readonly_fields = ('guest_stay', 'survey_template', 'submitted_at')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'survey_template', 'department', 'question_type')
    list_filter = ('question_type', 'survey_template', 'department')
    search_fields = ('text',)
