# Generated by Django 4.1.3 on 2022-11-17 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userlist', '0008_alter_funds_preco_aquisicao_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funds',
            name='preco_aquisicao',
            field=models.DecimalField(decimal_places=False, default=False, max_digits=10.2),
        ),
        migrations.AlterField(
            model_name='funds',
            name='valor_do_emprestimo',
            field=models.DecimalField(decimal_places=False, default=False, max_digits=10.2),
        ),
        migrations.AlterField(
            model_name='funds',
            name='valor_parcela',
            field=models.DecimalField(decimal_places=False, default=False, max_digits=10.2),
        ),
    ]
