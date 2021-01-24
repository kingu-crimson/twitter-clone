from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers

from tweets.serializers import TweetSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')

class UserSerializered(serializers.ModelSerializer):
    tweets = TweetSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id' , 'email', 'name', 'image', 'tweets')