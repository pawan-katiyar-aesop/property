# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-10-31 08:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0006_auto_20181031_0600'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='is_top',
            field=models.BooleanField(default=False),
        ),
    ]