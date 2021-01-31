from django.urls import path, include
from users.views import UserList, details, uploadImage

urlpatterns = [
    path('all', UserList.as_view()),
    path('details', details),
    path('image', uploadImage),
]