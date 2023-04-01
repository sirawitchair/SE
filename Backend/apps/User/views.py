from django.http import HttpResponse,HttpResponseForbidden
from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login,logout
from django.contrib.auth.views import LoginView

from .models import User
from .forms import LoginForm,UserForm


def login(request):
    if request.method == 'GET':
        form = LoginForm()
        return render(request,'User/login.html', {'form': form})
    elif request.method == 'POST':
        # user = User.objects.all()
        form = LoginForm(request.POST)
        # print(form)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = User.objects.get('email','password')
            print(email,password,user)
            if user is not None:
                login(request, user)
                return redirect('./createUser')
        # form is not valid or user is not authenticated
        messages.error(request,f'Invalid username or password')
        return render(request,'User/login.html',{'form': form})


def profile(request):
        user = User.objects.all()
        context={'user':user}
        return render(request,'User/profile.html',context)

def createUser(request):
    if request.method=='POST':
        form = UserForm(request.POST)
        # print(form.errors)
        if form.is_valid():
            form.save()
            # login(request,user)
            return redirect('/profile')
    form = UserForm()
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