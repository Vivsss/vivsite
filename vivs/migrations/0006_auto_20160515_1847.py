# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0005_auto_20160515_1842'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(verbose_name='Image', max_length=100),
        ),
        migrations.AlterField(
            model_name='task',
            name='name',
            field=models.CharField(verbose_name='Task', max_length=50),
        ),
    ]
