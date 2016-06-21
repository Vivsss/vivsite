# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivs', '0011_remove_project_cover'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='cover',
            field=models.ImageField(blank=True, upload_to=models.FileField(upload_to='cover/'), null=True, verbose_name='Cover image'),
        ),
    ]
