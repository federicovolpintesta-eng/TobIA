import pandas as pd
from datetime import datetime, timedelta

data = {
    "Fecha": [(datetime.now() - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(1, 6)],
    "Ingresos Habitaciones": [15000.50, 14200.00, 16800.75, 12500.00, 18000.00],
    "Ingresos F&B": [3000.00, 2500.00, 4100.00, 1900.00, 5200.00],
    "Total Gastos Operativos": [8000.00, 7500.00, 8500.00, 7000.00, 9200.00],
    "Habitaciones Disponibles": [100, 100, 100, 100, 100],
    "Habitaciones Ocupadas": [85, 80, 92, 70, 98]
}

df = pd.DataFrame(data)
df.to_excel("/Users/federicovolpintesta/Desktop/finanzas_ejemplo.xlsx", index=False)
print("Created finanzas_ejemplo.xlsx")
