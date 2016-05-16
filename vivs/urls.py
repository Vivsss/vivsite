from django.conf.urls import include, url, patterns
from vivs.views.Project import *

configure()

project_url = [
    url(r'^$', DashboardView.as_view(), name ='dashboard'),
    url(r'^(?P<pk>\d+)/$', ProjectDetailView.as_view(), name='project_detail')
]

urlpatterns = patterns('',
    url(r'^index/', include(project_url, namespace="project")),
)