# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name='Image')),
            ],
            options={
                'verbose_name_plural': 'Images',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25, verbose_name='Project name')),
                ('website', models.CharField(max_length=50, verbose_name='Project website')),
                ('client', models.CharField(max_length=50, verbose_name='Client')),
                ('date', models.CharField(max_length=25, verbose_name='Project date')),
                ('images', models.ForeignKey(related_name='Project with this image+', null=True, verbose_name='Images in this project', blank=True, to='vivs.Image')),
            ],
            options={
                'verbose_name_plural': 'Projects',
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name='Task')),
            ],
            options={
                'verbose_name_plural': 'Tasks',
            },
        ),
        migrations.AddField(
            model_name='project',
            name='tasks',
            field=models.ForeignKey(related_name='Project with this task+', null=True, verbose_name='Tasks in this project', blank=True, to='vivs.Task'),
        ),
    ]
