# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0002_auto_20160515_1805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='website',
            field=models.CharField(verbose_name='Project website', max_length=50),
        ),
    ]
