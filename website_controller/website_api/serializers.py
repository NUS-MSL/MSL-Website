from rest_framework import serializers
from .models import RecentEvent


class RecentEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecentEvent
        fields = ('id', 'event_title', 'event_description', 'event_date',
                  'event_image', 'created_at')