from django.db import models
from vivs.models.Project import Project

class Image(models.Model):

    name = models.CharField(
        verbose_name="Image name",
        max_length=50,
        null=True,
        blank=True
    )

    image = models.ImageField(
        verbose_name = "Project images",
        upload_to = 'project_images/',
        height_field = None,
        width_field = None,
        max_length = 100,
        null = True,
        blank = True
    )

    releted_project = models.ForeignKey(
        Project,
        verbose_name = "Images in this project",
        related_name = "images",
        null=True,
        blank=True
    )

    image_descr = models.TextField(
        verbose_name="Image description",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "vivs"
        verbose_name_plural = "Images"