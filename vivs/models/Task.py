from django.db import models


class Task(models.Model):
    name = models.CharField(
        verbose_name="Task",
        max_length = 50
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "vivs"
        verbose_name_plural = "Tasks"
