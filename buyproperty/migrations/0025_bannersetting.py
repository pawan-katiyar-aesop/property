# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-19 12:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0024_auto_20181112_1755'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('show_on', models.CharField(blank=True, choices=[('home-page', 'home-page'), ('page-1', 'page-1')], max_length=10, null=True)),
                ('title', models.CharField(blank=True, max_length=250, null=True)),
            ],
        ),
    ]