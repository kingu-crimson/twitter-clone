from django.urls import path, include
from users.views import UserList, details

urlpatterns = [
    path('all', UserList.as_view()),
    path('details', details)
]