from vivs.models.Project import Project
from vivs.models.Task import Task

def project_list(request):
    #selezioniamo tutto in bdd e poi chiediamo a motore sql di contare quanti elementi ci sono
    return {'project_list': Project.objects.all()}

def task_list(request):
    #selezioniamo tutto in bdd e poi chiediamo a motore sql di contare quanti elementi ci sono
    return {'task_list': Task.objects.all()}