from rest_framework import serializers
from .models import RecentEvent

# For Get Request:
class RecentEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecentEvent
        fields = ('id', 'event_title', 'event_description', 'event_date',
                  'event_image', 'created_at')

# For Post Request:       
class CreateRecentEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecentEvent
        fields = ('event_title', 'event_description', 'event_date',
                        'event_image')