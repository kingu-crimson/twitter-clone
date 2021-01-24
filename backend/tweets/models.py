from django.db import models
from users.models import UserAccount

# Create your models here.
class Tweet(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='tweets')
    content = models.CharField(max_length=5000)
    image = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content