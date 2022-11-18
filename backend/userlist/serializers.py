from .models import  User
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['cliente', 'documento', 'valor_do_emprestimo', 'data_de_vencimento']