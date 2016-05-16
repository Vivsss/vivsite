from django.contrib import admin
from vivs.models.Project import Project
from vivs.models.Task import Task
from vivs.models.Image import Image


# Register your models here.
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(Image)
