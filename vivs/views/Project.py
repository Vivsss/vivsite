from django.core.urlresolvers import reverse_lazy
from django.views.generic import TemplateView, DetailView
from vivs.models.Project import Project

class DashboardView(TemplateView):
    template_name = "vivs/index.html"

class ProjectDetailView(DetailView):
    model = Project
    template_name = "vivs/project_detail.html"
    context_object_name = "project"