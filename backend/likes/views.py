from django.shortcuts import render
from rest_framework import generics

from likes.models import Like
from likes.serializers import LikeSerializer

class LikeList(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer



