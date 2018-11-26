# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-26 10:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0033_auto_20181124_1228'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='common_reception',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='property',
            name='security',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='property',
            name='visitor_parking',
            field=models.BooleanField(default=False),
        ),
    ]