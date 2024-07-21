from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RecentEventSerializer, CreateRecentEventSerializer
from .models import RecentEvent
from rest_framework.views import APIView
from rest_framework.response import Response

class RecentEventApiEndpoint(generics.ListAPIView):
    queryset = RecentEvent.objects.all()
    serializer_class = RecentEventSerializer

class CreateRecentEventView(APIView):
    serializer_class = CreateRecentEventSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            event_title = serializer.validated_data.get('event_title')
            event_description = serializer.validated_data.get('event_description')
            event_date = serializer.validated_data.get('event_date')
            event_image = serializer.validated_data.get('event_image')

            recent_event = RecentEvent(
                event_title=event_title,
                event_description=event_description,
                event_date=event_date,
                event_image=event_image
            )
            recent_event.save()
            return Response(RecentEventSerializer(recent_event).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)