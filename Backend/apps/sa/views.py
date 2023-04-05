from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView

from .forms import SAforms
from .models import SA

class SAListView(LoginRequiredMixin,ListView):
    model = SA
    template_name = 'sa/sa_list_view.html'
    login_url = '/User/login/'
    paginate_by = 30
    
    def get_queryset(self) :
        sa = SA.objects.all()
        sa = sa.order_by('-date')
        return sa