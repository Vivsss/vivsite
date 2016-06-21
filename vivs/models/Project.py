from django.core.urlresolvers import reverse_lazy
from django.db import models
from vivs.models.Task import Task

class Project (models.Model):

    name = models.CharField(
        verbose_name = "Project name",
        max_length=50
    )
    cover = models.ImageField(
        verbose_name = "Cover image",
        upload_to = 'cover/',
        height_field = None,
        width_field = None,
        max_length = 100,
        null = True,
        blank = True
    )
    website = models.CharField(
        verbose_name = "Project website",
        max_length=50,
        null=True,
        blank=True
    )

    client = models.CharField(
        verbose_name = "Client",
        max_length = 50
    )

    client_descr = models.TextField(
        verbose_name="Client description",
    )

    tasks = models.ManyToManyField(
        Task,
        verbose_name= "tasksInProject",
        related_name="projects",
        blank = True
    )
    date = models.CharField(
        verbose_name = "Project date",
        max_length=50
    )

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy('vivs_app:project:project_detail', kwargs={'pk': self.id})

    class Meta:
        app_label = "vivs"
        #ordering = [ ]
        verbose_name_plural = "Projects"