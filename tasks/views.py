from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Crear funciones para el crud, asi sabe que datos son 
# y generar todo el crud
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()