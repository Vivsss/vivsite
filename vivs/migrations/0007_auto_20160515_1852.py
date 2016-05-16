# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0006_auto_20160515_1847'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='tasks',
        ),
        migrations.AddField(
            model_name='project',
            name='tasks',
            field=models.ManyToManyField(verbose_name='Tasks in this project', to='vivs.Task', null=True, blank=True, related_name='_project_tasks_+'),
        ),
    ]
