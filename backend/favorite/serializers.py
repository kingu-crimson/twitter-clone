from rest_framework import serializers
from favorite.models import Favourite

class FavouriteSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True )
    class Meta:
        model = Favourite
        fields = ('id', 'user_id', 'user', 'tweet_id')