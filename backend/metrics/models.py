from django.db import models

class DailyMetric(models.Model):
    date = models.DateField(unique=True, help_text="Fecha de la medición")
    nps = models.FloatField(default=0.0, help_text="Net Promoter Score")
    adr = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Average Daily Rate")
    goppar = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Gross Operating Profit Per Available Room")
    revpar = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Revenue Per Available Room")
    trevpar = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Total Revenue Per Available Room")
    gop = models.DecimalField(max_digits=15, decimal_places=2, default=0.00, help_text="Gross Operating Profit")
    los = models.FloatField(default=0.0, help_text="Length of Stay")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"Métricas del {self.date}"

class MetricSegment(models.Model):
    date = models.DateField(help_text="Fecha de la transacción/estadía")
    channel = models.CharField(max_length=50, help_text="Canal de venta (ej. OTA, Directo, Agencia)")
    room_type = models.CharField(max_length=50, help_text="Tipo de Habitación (ej. Suite, Standard)")
    segment = models.CharField(max_length=50, help_text="Segmento del cliente (ej. Leisure, Corporate)")
    
    # Financial metrics for this specific segment/transaction
    adr = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    revpar = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
    # Quality metrics (e.g., if there's a survey associated)
    nps_score = models.IntegerField(null=True, blank=True)
    
    # Volume
    room_nights = models.IntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"{self.date} - {self.channel} - {self.room_type}"
