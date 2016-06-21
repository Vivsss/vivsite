# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0009_auto_20160515_1904'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='cover',
            field=models.ImageField(upload_to=models.FileField(upload_to='cover/'), verbose_name='Cover image', blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='tasks',
            field=models.ManyToManyField(verbose_name='tasksInProject', to='vivs.Task', blank=True, related_name='projects'),
        ),
    ]
