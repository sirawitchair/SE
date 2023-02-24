from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseForbidden

from .models import User
from .forms import UserForm


def createUser(request):
    
    form = UserForm()
    if request.method=='POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context={'form':form}
    return render(request,'User/register.html',context)

def updateUser(request,user_id):
    
    user_update=User.objects.get(id=user_id)
    if user_update.data_user!=request.user:
        return HttpResponseForbidden()
    form = UserForm(instance=user_update)
    if request.method=='POST':
        form = UserForm(request.POST,instance=user_update)
        if form.is_valid():
            form.save()
            return redirect('/')
    
    context={'form':form}
    return render(request,'User/register.html',context)

def deleteUser(request,user_id):
    user_delete=User.objects.get(id=user_id)
    if user_delete.data_user!=request.user:
        return HttpResponseForbidden()
    if request.method=='POST':
        user_delete.delete()
        return redirect('/')
            
    context={'item':user_delete}
    return render(request,'User/register.html',context)