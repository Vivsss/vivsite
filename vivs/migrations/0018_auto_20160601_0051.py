# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0017_auto_20160601_0039'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image',
            field=models.ImageField(null=True, upload_to='project_images/', verbose_name='Project images', blank=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(null=True, max_length=50, verbose_name='Image name', blank=True),
        ),
    ]
