# Generated by Django 4.1.3 on 2022-11-17 21:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Funds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cliente', models.CharField(default=False, max_length=250)),
                ('documento', models.CharField(default=False, max_length=50)),
                ('endereco', models.CharField(default=False, max_length=250)),
                ('cep', models.CharField(default=False, max_length=50)),
                ('cidade', models.CharField(default=False, max_length=250)),
                ('uf', models.CharField(default=False, max_length=50)),
                ('valor_do_emprestimo', models.DecimalField(decimal_places=False, default=False, max_digits=10.2)),
                ('valor_parcela', models.DecimalField(decimal_places=False, default=False, max_digits=10.2)),
                ('total_parcelas', models.IntegerField(default=None, max_length=22)),
                ('parcela', models.IntegerField(default=None, max_length=22)),
                ('data_de_emissao', models.DateField(default=True)),
                ('data_de_vencimento', models.DateField(default=True)),
                ('preco_aquisicao', models.DecimalField(decimal_places=2, default=False, max_digits=10.2)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
