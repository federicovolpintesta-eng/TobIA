from django.db import models
from surveys.models import Hotel

class Empleado(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='empleados')
    nombre = models.CharField(max_length=255)
    rol = models.CharField(max_length=100)
    fecha_ingreso = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # Extra fields for the UI based on `training-server` or generic assumptions
    tipo_perfil = models.CharField(max_length=100, default='Standard')
    rendimiento_nps = models.FloatField(null=True, blank=True)
    avatar = models.ImageField(upload_to='empleados_avatars/', null=True, blank=True)

    def __str__(self):
        return f"{self.nombre} - {self.rol}"

class Evaluacion(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='evaluaciones')
    nps_global = models.IntegerField()
    resolucion_pct = models.IntegerField()
    analisis_pct = models.IntegerField()
    empatia_pct = models.IntegerField()
    rol_evaluado = models.CharField(max_length=100)
    feedback_generado = models.TextField(null=True, blank=True)
    proxima_evaluacion = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Evaluación {self.id} de {self.empleado.nombre}"
