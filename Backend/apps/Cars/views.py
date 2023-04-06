from datetime import date

from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView
from django.shortcuts import render,redirect
from django.urls import reverse_lazy

from .models import Cars
from .forms import Carsforms


class CarsListView(LoginRequiredMixin,ListView):
    model = Cars
    template_name = 'Cars/cars_list_view.html'
    login_url = '/User/login/'
    paginate_by = 30
    
    def get_queryset(self) :
        car = Cars.objects.all()
        # car = car.order_by('-date')
        return car
    
class CarsCreateView(LoginRequiredMixin, CreateView):
    model = Cars
    form_class = Carsforms
    template_name = 'Cars/createcar.html'
    login_url = '/User/login/'
    success_url = reverse_lazy('Cars:cv')

    def get_initial(self):
        return {'groups': self.request.user.groups }

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "เพิ่มข้อมูล"
        return context
    
    def form_valid(self, form):
        instance = form.save(commit=False)
        print(instance)
        instance.date = date.today()
        instance.data_user = self.request.user      
        instance.save()  
        return super().form_valid(form)
    
    def test_func(self):
        return self.request.user.groups.filter(name='SA').exists()
    
class CarsUpdateView(LoginRequiredMixin, UpdateView):
    model = Cars
    form_class = Carsforms
    template_name = 'Cars/updatecar.html'
    success_url = reverse_lazy('Cars:cv')
    login_url = '/User/login/'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "แก้ไขข้อมูล"
        return context
    def get_success_url(self):
        return reverse_lazy('Cars:cdt', kwargs={'pk': self.object.pk})
    def test_func(self):
        return self.request.user.groups.filter(name='SA').exists()


class CarsDeleteView(LoginRequiredMixin, DeleteView):
    model = Cars
    template_name = 'Cars/deletecar.html'
    success_url = reverse_lazy('Cars:cv')
    login_url = '/User/login/'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "ลบข้อมูล"
        return context

    def post(self, request, *args, **kwargs):
        if "cancel" in request.POST:
            return redirect('Cars/')
        else:
            return super().post(request, *args, **kwargs)
    
    def test_func(self):
        return self.request.user.groups.filter(name='SA').exists()



class CarsDetailView(DetailView):
    model = Cars
    template_name = 'Cars/detail.html'
    context_object_name = 'car'
    
    