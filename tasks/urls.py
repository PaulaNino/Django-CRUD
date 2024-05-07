from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

# Crear multiples rutas
# "Nombre de las url, que se va ajecutar"
#Este codigo esta generando las rutas   GET POST PUT DELETE
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Tasks API"))
]

