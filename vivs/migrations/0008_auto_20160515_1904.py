# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0007_auto_20160515_1852'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='images',
        ),
        migrations.AddField(
            model_name='image',
            name='releted_project',
            field=models.ForeignKey(blank=True, null=True, related_name='Images in this project+', verbose_name='Project with this image', to='vivs.Project'),
        ),
    ]
