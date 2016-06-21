from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from vivs.models.Project import Project
from vivs.models.Task import Task

def project_list(request):
    return {'project_list': Project.objects.all()}

def limit_project_list(request):
    return {'limit_project_list': Project.objects.all()[:5]}

def task_list(request):
    return {'task_list': Task.objects.all()}

def previous_project(request,):
    return {'task_list': Task.objects.all()}
