from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.models import UserAccount
from users.serializers import UserSerializered
# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializered

@api_view(['POST'])
def details(request):
    myaccount = UserAccount.objects.get(id=request.data['id'])
    serializer = UserSerializered(myaccount, many=False)
    return Response(serializer.data)
