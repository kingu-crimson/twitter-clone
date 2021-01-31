from django.urls import path, include
from tweets.views import TweetList, details, bookmakrs, following

urlpatterns = [
    path('', TweetList.as_view()),
    path('details', details),
    path('bookmarks', bookmakrs),
    path('following', following)
]