from django.urls import path
from .views import RecentEventApiEndpoint, CreateRecentEventView

urlpatterns = [
    path('recent-events', RecentEventApiEndpoint.as_view()),
    path('create-recent-event/', CreateRecentEventView.as_view()),
]