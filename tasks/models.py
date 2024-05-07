from django.db import models

# Crea el modelo de tareas con sus campos
# Herada de models su clase models para pder crear tabla
class Task(models.Model):
    #CharField: String
    title = models.CharField(max_length=200) 
    #TexField: Texto largo, blank-True: se puede guardar vacio
    description = models.TextField(blank=True)
    #BooleanField: Booleano, default=False: Falso
    done = models.BooleanField(default=False)


    def __str__(self):
        return self.title