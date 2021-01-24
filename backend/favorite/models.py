from django.db import models
from users.models import UserAccount
from tweets.models import Tweet

# Create your models here.
class Favourite(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    tweet_id = models.ForeignKey(Tweet, on_delete=models.CASCADE)
  
    def __str__(self):
        return self.user_id.name