from django.db import models
from vivs.models.Project import Project

class Image(models.Model):
    name = models.CharField(
        verbose_name="Image",
        max_length = 100
    )

    releted_project = models.ForeignKey(
        Project,
        verbose_name = "Project with this image",
        related_name = "Images in this project+",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "vivs"
        verbose_name_plural = "Images"