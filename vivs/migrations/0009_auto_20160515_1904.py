# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0008_auto_20160515_1904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='tasks',
            field=models.ManyToManyField(verbose_name='Tasks in this project', blank=True, to='vivs.Task', related_name='_project_tasks_+'),
        ),
    ]
