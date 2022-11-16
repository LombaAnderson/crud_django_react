from django.db import models
from django.contrib.auth.models import User



class User(models.Model):
    cliente = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=250, null=False)
    cpf_cnpj = models.CharField(default=False,max_length=50, null=False)
    endereco = models.CharField(default=False,max_length=250, null=False)
    cep = models.CharField(default=False,max_length=50, null=False)
    cidade = models.CharField(default=False,max_length=250, null=False)
    uf = models.CharField(default=False,max_length=50, null=False)


    def __str__(self):
     return self.nome

class Funds(models.Model):
    valor_do_emprestimo = models.DecimalField(max_digits=10.2 , decimal_places=2, null=False)
    valor_parcela = models.DecimalField(max_digits=10.2, decimal_places=2, null=False)
    total_parcelas= models.IntegerField(default=False, null= False)
    parcela = models.IntegerField(default=False, null=False)
    created_at = models.DateTimeField(default=False, null=False)
    data_de_vencimento = models.DateTimeField(default=None, null=False)
    preco_aquisicao = models.DecimalField(default=False,max_digits=10.2 ,decimal_places=2, null=False)
    
    def __str__(self):
       return str(self.created_at)