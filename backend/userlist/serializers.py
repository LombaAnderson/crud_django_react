from .models import Funds, User
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['cliente']


class FundsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Funds
        fields = ['cliente', 'url']