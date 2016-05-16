# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0003_auto_20160515_1835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='client',
            field=models.TextField(verbose_name='Client description'),
        ),
    ]
