from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=250, default=False, null=False)
    documentos = models.CharField(max_length=50, default=False, null=False)
    endereco = models.CharField(max_length=250, default=False, null=False)
    cep = models.CharField(max_length=50,  default=False,null=False)
    cidade = models.CharField(max_length=250, default=False, null=False)
    uf = models.CharField(max_length=50, default=False, null=False)

    def __str__(self):
     return self.cliente
    

class Funds(models.Model):
    valor_do_emprestimo = models.DecimalField(max_digits=10.2, decimal_places=2, default=False, null=False)
    valor_parcela = models.DecimalField(max_digits=10.2, decimal_places=2, default=False, null=False)
    total_parcelas= models.IntegerField( default=True, null=False)
    parcela = models.IntegerField( default=True, null=False)
    data_de_emissao = models.DateField(default=True)
    data_de_vencimento = models.DateField(default=True)
    preco_aquisicao = models.DecimalField(max_digits=10.2, decimal_places=2, default=False, null=False)
