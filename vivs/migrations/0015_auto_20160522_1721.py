# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0014_auto_20160522_1651'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='website',
            field=models.CharField(verbose_name='Project website', blank=True, max_length=50, null=True),
        ),
    ]
