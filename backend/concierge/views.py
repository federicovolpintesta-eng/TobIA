from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os
import json

import warnings
try:
    with warnings.catch_warnings():
        warnings.simplefilter("ignore", category=FutureWarning)
        import google.generativeai as genai
    HAS_GEMINI = True
except ImportError:
    HAS_GEMINI = False

class ConciergeMessageView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        message = request.data.get('message', '')
        
        # Fallback/Heurísticas si no hay API Key
        api_key = os.environ.get("GEMINI_API_KEY")
        
        if HAS_GEMINI and api_key and api_key != 'ingresa_tu_clave_gratuita_aqui':
            try:
                genai.configure(api_key=api_key)
                model = genai.GenerativeModel('gemini-2.5-flash')
                
                prompt = f"""
                Eres la IA de Concierge de un hotel de lujo.
                El huésped acaba de enviar este mensaje: "{message}"
                
                1. Detecta el idioma y traduce el mensaje al español (si ya está en español, déjalo igual).
                2. Genera 3 sugerencias de respuesta corta y profesional en el idioma original del huésped para que el recepcionista solo tenga que hacer click.
                
                Devuelve estrictamente un JSON válido con esta estructura:
                {{
                    "translation": "traducción al español",
                    "suggestions": ["Sugerencia 1", "Sugerencia 2", "Sugerencia 3"],
                    "language": "Idioma detectado"
                }}
                """
                
                response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
                ai_data = json.loads(response.text)
                return Response(ai_data, status=status.HTTP_200_OK)
            except Exception as e:
                print("Gemini API Error:", e)
                # Fallthrough to fallback
        
        # Fallback Heurístico Gratuito
        lower_msg = message.lower()
        translation = message
        lang = "Español"
        suggestions = ["Perfecto, enseguida nos ocupamos.", "Lamento el inconveniente, lo resolvemos ya mismo.", "¿En qué más puedo ayudarle?"]
        
        if 'towel' in lower_msg or 'room' in lower_msg or 'please' in lower_msg:
            lang = "Inglés"
            translation = f"(Inglés) {message} -> Solicita toallas/servicio en la habitación."
            suggestions = ["Right away, sir. Sending housekeeping.", "Apologies, we will send it immediately.", "Is there anything else you need?"]
        elif 'arigato' in lower_msg or 'kudasai' in lower_msg:
            lang = "Japonés"
            translation = f"(Japonés) {message} -> Mensaje en japonés (Heurística)"
            suggestions = ["Kashikomarimashita (Entendido).", "Sugu ni 대응 shimasu (Lo atenderemos enseguida).", "Hoka ni nani ka? (¿Algo más?)"]
        
        return Response({
            "translation": translation,
            "suggestions": suggestions,
            "language": lang
        }, status=status.HTTP_200_OK)
