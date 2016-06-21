# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0013_auto_20160521_2239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.CharField(verbose_name='Project date', max_length=50),
        ),
    ]
