# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-21 06:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0030_testimonialsetting_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='nearest',
            name='nearest_description',
            field=models.TextField(blank=True, default='Nearest Place Description here.'),
        ),
    ]
