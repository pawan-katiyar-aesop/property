# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-12 06:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0022_auto_20181112_1157'),
    ]

    operations = [
        migrations.AddField(
            model_name='agentlead',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customerlead',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
