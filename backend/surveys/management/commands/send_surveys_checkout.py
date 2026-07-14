from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.utils import timezone
from datetime import timedelta
from django.conf import settings
from surveys.models import GuestStay

class Command(BaseCommand):
    help = 'Envía encuestas de calidad a los huéspedes que hacen check-out mañana'

    def handle(self, *args, **kwargs):
        # Queremos huéspedes cuyo check_out_date sea exactamente mañana
        mañana = timezone.now().date() + timedelta(days=1)
        
        # Filtramos huéspedes que salen mañana y que tengan email
        guests = GuestStay.objects.filter(check_out_date=mañana).exclude(guest_email='')

        if not guests.exists():
            self.stdout.write(self.style.SUCCESS('No hay huéspedes que salgan mañana o que tengan email.'))
            return

        enviados = 0
        for guest in guests:
            asunto = f'¿Cómo fue tu estadía en {guest.hotel.name}?'
            mensaje = f'''Hola {guest.guest_name},

Esperamos que hayas disfrutado tu estadía en {guest.hotel.name} en la habitación {guest.room_number}.
Como mañana es tu check-out, nos encantaría conocer tu opinión para seguir mejorando.

Por favor, completa nuestra breve encuesta de satisfacción aquí:
http://localhost:3000/survey/{guest.hotel.id}

¡Muchas gracias y buen viaje de regreso!
El equipo de {guest.hotel.name}
'''
            try:
                send_mail(
                    subject=asunto,
                    message=mensaje,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[guest.guest_email],
                    fail_silently=False,
                )
                enviados += 1
                self.stdout.write(self.style.SUCCESS(f'Correo enviado a {guest.guest_email}'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Error al enviar a {guest.guest_email}: {str(e)}'))

        self.stdout.write(self.style.SUCCESS(f'Proceso finalizado. Total enviados: {enviados}'))
