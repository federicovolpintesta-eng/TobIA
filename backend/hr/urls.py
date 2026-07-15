from django.urls import path
from . import views

urlpatterns = [
    path('empleados', views.empleados_list, name='empleados-list'),
    path('empleados/nuevo', views.empleado_create, name='empleado-create'),
    path('empleados/import', views.empleados_import, name='empleados-import'),
]
