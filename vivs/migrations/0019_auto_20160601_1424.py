# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0018_auto_20160601_0051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='releted_project',
            field=models.ForeignKey(verbose_name='Images in this project', blank=True, to='vivs.Project', null=True, related_name='images'),
        ),
    ]
