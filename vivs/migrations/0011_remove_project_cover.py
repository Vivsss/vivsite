# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0010_auto_20160521_2038'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='cover',
        ),
    ]
