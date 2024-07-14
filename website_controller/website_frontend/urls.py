from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('about', index),
    path('events', index),
    path('contact', index),
]