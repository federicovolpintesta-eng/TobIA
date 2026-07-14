from enum import Enum
from typing import List, Dict
from .models import SurveyResponse, Department, GuestStay
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

class NPSCategory(Enum):
    PROMOTER = "Promotor"
    PASSIVE = "Pasivo"
    DETRACTOR = "Detractor"
    INVALID = "Inválido"

def classify_nps_score(score: int) -> str:
    """
    Clasifica una puntuación (0-10) en la categoría NPS correspondiente.
    """
    if score is None or not isinstance(score, int) or score < 0 or score > 10:
        return NPSCategory.INVALID.value
    
    if score >= 9:
        return NPSCategory.PROMOTER.value
    elif score >= 7:
        return NPSCategory.PASSIVE.value
    else:
        return NPSCategory.DETRACTOR.value

def calculate_nps_metric(scores: List[int]) -> Dict[str, float]:
    """
    Calcula el Net Promoter Score (NPS) de una lista de puntuaciones.
    Fórmula: % Promotores - % Detractores
    """
    if not scores:
        return {"nps_score": 0.0, "promoters_pct": 0.0, "passives_pct": 0.0, "detractors_pct": 0.0, "total": 0}

    # Filtrar scores nulos si los hay
    valid_scores = [s for s in scores if s is not None and 0 <= s <= 10]
    total_responses = len(valid_scores)
    
    if total_responses == 0:
         return {"nps_score": 0.0, "promoters_pct": 0.0, "passives_pct": 0.0, "detractors_pct": 0.0, "total": 0}

    categories = [classify_nps_score(s) for s in valid_scores]
    
    promoters = categories.count(NPSCategory.PROMOTER.value)
    passives = categories.count(NPSCategory.PASSIVE.value)
    detractors = categories.count(NPSCategory.DETRACTOR.value)
    
    promoters_pct = (promoters / total_responses) * 100
    passives_pct = (passives / total_responses) * 100
    detractors_pct = (detractors / total_responses) * 100
    
    nps_score = round(promoters_pct - detractors_pct, 2)
    
    return {
        "nps_score": nps_score,
        "promoters_pct": round(promoters_pct, 2),
        "passives_pct": round(passives_pct, 2),
        "detractors_pct": round(detractors_pct, 2),
        "total_responses": total_responses
    }

def analyze_sentiment(survey_response):
    """
    Analiza todos los comentarios abiertos de una encuesta y asigna
    un puntaje general de sentimiento.
    """
    analyzer = SentimentIntensityAnalyzer()
    
    # Recolectar todas las respuestas de texto de esta encuesta
    text_answers = survey_response.answers.filter(
        question__question_type='OPEN_TEXT',
        text_value__isnull=False
    )
    
    if not text_answers.exists():
        return
        
    combined_text = " ".join([ans.text_value for ans in text_answers if ans.text_value.strip()])
    
    if not combined_text:
        return
        
    # Calcular polaridad (Compound score)
    sentiment_dict = analyzer.polarity_scores(combined_text)
    compound = sentiment_dict['compound']
    
    survey_response.sentiment_score = compound
    
    if compound >= 0.05:
        survey_response.sentiment_label = 'POSITIVE'
    elif compound <= -0.05:
        survey_response.sentiment_label = 'NEGATIVE'
    else:
        survey_response.sentiment_label = 'NEUTRAL'
        
    survey_response.save()
