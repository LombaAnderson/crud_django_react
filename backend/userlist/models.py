from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
    originador = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=250, null=False)
    
    # cpf_cnpj = models.CharField()
    # endereco = models.CharField()
    # cep = models.CharField()
    # cidade = models.CharField()
    # uf = models.CharField()
    # valor_do_emprestimo = models.DecimalField()
    # valor_parcela = models.DecimalField()
    # total_parcelas= models.IntegerField()
    # parcela = models.IntegerField()
    # data_de_emissao = models.DateField()
    # data_de_vencimento = models.DateField()
    # preco_aquisicao = models.DecimalField()

    def __str__(self):
     return self.cliente

class User(models.Model):
    cliente = models.CharField(max_length=250)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
