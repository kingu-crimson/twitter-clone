from django.urls import path, include
from users.views import UserList

urlpatterns = [
    path('all', UserList.as_view()),
]