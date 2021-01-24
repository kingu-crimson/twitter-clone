from django.urls import path, include
from followers.views import FollowerList

urlpatterns = [
    path('', FollowerList.as_view()),
]