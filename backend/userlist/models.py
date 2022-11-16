from django.db import models
from django.contrib.auth.models import User


class User(models.Model):
    cliente = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=250, null=False)
    cpf_cnpj = models.CharField(max_length=50, null=False)
    endereco = models.CharField()
    cep = models.CharField()
    cidade = models.CharField()
    uf = models.CharField()


    def __str__(self):
     return self.nome

class Funds(models.Model):
    valor_do_emprestimo = models.DecimalField(max_digits=10.2 , decimal_places=2, null=False)
    valor_parcela = models.DecimalField(max_digits=10.2, decimal_places=2, null=False)
    # total_parcelas= models.IntegerField()
    # parcela = models.IntegerField()
    # data_de_emissao = models.DateField()
    # data_de_vencimento = models.DateField()
    # preco_aquisicao = models.DecimalField()