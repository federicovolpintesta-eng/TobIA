from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Hotel, Department, SurveyTemplate, Question, GuestStay, SurveyResponse, Answer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff']

class GuestStaySerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestStay
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text', 'question_type', 'department']

class SurveyTemplateSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = SurveyTemplate
        fields = ['id', 'title', 'description', 'questions']

class AnswerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['question', 'score_value', 'text_value']

class SurveyResponseCreateSerializer(serializers.ModelSerializer):
    answers = AnswerCreateSerializer(many=True)

    class Meta:
        model = SurveyResponse
        fields = ['guest_stay', 'survey_template', 'answers']

    def create(self, validated_data):
        answers_data = validated_data.pop('answers')
        response = SurveyResponse.objects.create(**validated_data)
        for answer_data in answers_data:
            Answer.objects.create(survey_response=response, **answer_data)
        return response

class SurveyResponseSerializer(serializers.ModelSerializer):
    guestName = serializers.SerializerMethodField()
    room = serializers.SerializerMethodField()
    stayDates = serializers.SerializerMethodField()
    nps = serializers.SerializerMethodField()
    comment = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()
    aiSentiment = serializers.CharField(source='sentiment_label')
    
    class Meta:
        model = SurveyResponse
        fields = ['id', 'status', 'guestName', 'room', 'stayDates', 'nps', 'comment', 'tags', 'aiSentiment', 'submitted_at']
        
    def get_guestName(self, obj):
        return obj.guest_stay.guest_name if obj.guest_stay else 'Huésped Anónimo'
        
    def get_room(self, obj):
        return obj.guest_stay.room_number if obj.guest_stay else 'N/A'
        
    def get_stayDates(self, obj):
        if not obj.guest_stay: return 'N/A'
        return f"{obj.guest_stay.check_out_date}"
        
    def get_nps(self, obj):
        for ans in obj.answers.all():
            if ans.question.question_type == 'NPS':
                return ans.score_value
        return None
        
    def get_comment(self, obj):
        comments = []
        for ans in obj.answers.all():
            if ans.text_value:
                comments.append(ans.text_value)
        return " ".join(comments)
        
    def get_tags(self, obj):
        return []
