from django.db import models
from users.models import UserAccount

# Create your models here.
class Follower(models.Model):
    user_to = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='userTo')
    user_from = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='userFrom')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s %s" % (self.user_from.name, self.user_to.name)

