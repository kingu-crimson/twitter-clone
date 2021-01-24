from django.urls import path, include
from likes.views import LikeList

urlpatterns = [
    path('', LikeList.as_view()),
]