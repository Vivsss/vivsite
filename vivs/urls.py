from django.conf.urls import include, url, patterns
from vivsite import settings
from vivs.views.Project import *


project_url = [
    url(r'^$', DashboardView.as_view(), name ='dashboard'),
    url(r'^about/$', AboutView.as_view(), name='about'),
    url(r'^works/$', WorksView.as_view(), name='works'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    url(r'^project/$', ProjectDetailView, name='project_detail'),
    url(r'^task/(?P<pk>\d+)/$', TaskToProjectFilterView.as_view(), name='task_filter_view'),
    url(r'^mentions-legales/$', LegalView.as_view(), name='mentions_legales')
]

urlpatterns = patterns('',
    url(r'^index/', include(project_url, namespace="project")),
)
