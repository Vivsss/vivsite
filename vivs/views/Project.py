from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView, DetailView, ListView, CreateView
from vivs.models.Project import Project, Task

class DashboardView(TemplateView):
    model = Project
    context_object_name = "project_index"
    template_name = "vivs/index.html"

#class ProjectDetailView(DetailView):
 #   model = Project
  #  template_name = "vivs/project_detail.html"
   # context_object_name = "project"*/

class TaskToProjectFilterView(DetailView):
    model = Task
    template_name = "vivs/task_filter.html"
    context_object_name = "task_filter"

class AboutView(TemplateView):
    template_name = "vivs/about.html"

class WorksView(ListView):
    model = Project
    template_name = "vivs/works.html"
    context_object_name = "works"

class ContactView(TemplateView):
    template_name = "vivs/contact.html"

class LegalView(TemplateView):
    template_name = "vivs/mentions-legales.html"

def ProjectDetailView(request):
    project_list = Project.objects.all()
    paginator = Paginator(project_list, 1) # Show 1 project per page

    page = request.GET.get('page')
    try:
        projects = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        projects = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        projects = paginator.page(paginator.num_pages)

    return render(request, 'vivs/project_detail.html', {'projects': projects})

