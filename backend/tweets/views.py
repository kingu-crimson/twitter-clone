from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from tweets.models import Tweet
from tweets.serializers import TweetSerializer
# Create your views here.

class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

@api_view(['POST'])
def details(request):
    tweet = Tweet.objects.get(id=request.data['id'])
    serializer = TweetSerializer(tweet, many=False)
    return Response(serializer.data)
