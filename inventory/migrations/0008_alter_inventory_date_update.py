# Generated by Django 3.2.8 on 2021-11-05 15:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0007_alter_inventory_date_update'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='date_update',
            field=models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Update'),
        ),
    ]
