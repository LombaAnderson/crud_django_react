from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
    owner= models.ForeignKey( User,on_delete=models.CASCADE)
    cliente = models.CharField(default=True, max_length=250, null=False)
    documento = models.CharField(default=False, max_length=50)
    endereco =  models.CharField(default=False, max_length=250)
    cep = models.CharField(default=False, max_length=50)
    cidade = models.CharField(default=False, max_length=250)
    uf = models.CharField(default=False, max_length=50)
    valor_do_emprestimo = models.DecimalField(decimal_places=False, default=None, max_digits=10)
    valor_parcela = models.DecimalField(decimal_places=False, default=False, max_digits=10)
    total_parcelas = models.IntegerField(default=None)
    parcela = models.IntegerField(default=None)
    data_de_emissao = models.DateField(default=True)
    data_de_vencimento = models.DateField(default=True)
    preco_aquisicao = models.DecimalField(decimal_places=False, default=False, max_digits=10)

    def __str__(self):
      return self.cliente
                
