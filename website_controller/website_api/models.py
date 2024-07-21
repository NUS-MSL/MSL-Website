from django.db import models

class RecentEvent(models.Model):
    event_title = models.CharField(max_length=200, blank=False, null=False)
    event_description = models.TextField(blank=False, null=False)
    event_date = models.DateTimeField(blank=False, null=False)
    event_image = models.ImageField(upload_to='recent_event_images/', blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.event_title