# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0004_auto_20160515_1839'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='client_descr',
            field=models.TextField(default='', verbose_name='Client description'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='project',
            name='client',
            field=models.CharField(verbose_name='Client', max_length=50),
        ),
    ]
