from django.urls import path
from .views import RecentEventApiEndpoint

urlpatterns = [
    path('recent-events', RecentEventApiEndpoint.as_view()),
]