from .models import  User
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['cliente', 'documento','valor_do_emprestimo ', 'total_parcelas', 'data_de_emissao', 'data_de_vencimento']