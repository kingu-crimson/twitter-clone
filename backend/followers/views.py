from django.shortcuts import render
from rest_framework import generics

from followers.models import Follower
from followers.serializers import FollowerSerializer
# Create your views here.

class FollowerList(generics.ListCreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer
