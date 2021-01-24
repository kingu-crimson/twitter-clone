from django.db import models
from users.models import UserAccount
from tweets.models import Tweet

class Like(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user')
    tweet_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id.name


# Create your models here.
