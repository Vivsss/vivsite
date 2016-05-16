from django.core.urlresolvers import reverse_lazy
from django.db import models
from vivs.models.Task import Task

class Project (models.Model):

    name = models.CharField(
        verbose_name = "Project name",
        max_length=25
    )

    website = models.CharField(
        verbose_name = "Project website",
        max_length=50
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
        verbose_name= "Tasks in this project", #progetto->tasks : quale macchina ha fatto il tragitto
        related_name="Project with this task+", #task->progetti :per sapere quali sono i percorsi fatti da una macchina
        blank = True
    )
    date = models.CharField(
        verbose_name = "Project date",
        max_length=25
    )

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy('vivs_app:project:detail', kwargs={'pk': self.id})

    class Meta:
        app_label = "vivs"
        #ordering = [ ]
        verbose_name_plural = "Projects"