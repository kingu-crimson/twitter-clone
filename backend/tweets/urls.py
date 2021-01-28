from django.urls import path, include
from tweets.views import TweetList

urlpatterns = [
    path('', TweetList.as_view()),
]