from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseForbidden

from .models import Cars
from .forms import CarForm


def createCar(request):
    
    form = CarForm()
    if request.method=='POST':
        form = CarForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context={'form':form}
    return render(request,'Car/createcar.html',context)

def updateCar(request,car_id):
    
    car_update=Cars.objects.get(id=car_id)
    if car_update.data_car!=request.car:
        return HttpResponseForbidden()
    form = CarForm(instance=car_update)
    if request.method=='POST':
        form = CarForm(request.POST,instance=car_update)
        if form.is_valid():
            form.save()
            return redirect('/')
    
    context={'form':form}
    return render(request,'Car/createcar.html',context)

def deleteCar(request,car_id):
    
    car_delete=Cars.objects.get(id=car_id)
    if car_delete.data_car!=request.car:
        return HttpResponseForbidden()
    if request.method=='POST':
        car_delete.delete()
        return redirect('/')
            
    context={'item':car_delete}
    return render(request,'Car/createcar.html',context)