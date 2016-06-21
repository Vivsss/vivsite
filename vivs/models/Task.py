from django.db import models
from django.core.urlresolvers import reverse_lazy


class Task(models.Model):
    name = models.CharField(
        verbose_name="Task",
        max_length = 50
    )

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy('vivs_app:project:task_filter_view', kwargs={'pk': self.id})

    class Meta:
        app_label = "vivs"
        verbose_name_plural = "Tasks"
