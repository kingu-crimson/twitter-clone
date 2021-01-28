from django.shortcuts import render
from rest_framework import generics

from users.models import UserAccount
from users.serializers import UserSerializered
# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializered
