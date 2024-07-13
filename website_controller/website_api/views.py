from django.shortcuts import render
from rest_framework import generics
from .serializers import RecentEventSerializer
from .models import RecentEvent

class RecentEventApiEndpoint(generics.ListAPIView):
    queryset = RecentEvent.objects.all()
    serializer_class = RecentEventSerializer