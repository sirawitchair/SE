from datetime import date

from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import CreateView
from django.views.generic import ListView
from django.shortcuts import render
from django.urls import reverse_lazy

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
    
class SACreateView(LoginRequiredMixin, CreateView):
    model = SA
    form_class = SAforms
    template_name = 'sa/sa_create_view.html'
    login_url = '/User/login/'
    success_url = reverse_lazy('sa:List')

    def get_initial(self):
        return {'groups': self.request.user.groups }

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "เพิ่มข้อมูล"
        return context
    
    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.date = date.today()
        instance.data_user = self.request.user      
        instance.save()  
        return super().form_valid(form)