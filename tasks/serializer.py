from rest_framework import serializers
from .models import Task

#Convertir de Django a python para despues convertir a json
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #Hay dos maneras de hacerlo, por campos especificos o llamndo todos los campos:
        #field = ('id', 'title', 'description', 'done')
        fields = '__all__'