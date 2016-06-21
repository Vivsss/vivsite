# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0019_auto_20160601_1424'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image_descr',
            field=models.TextField(null=True, verbose_name='Image description', blank=True),
        ),
    ]
