from django.http import HttpResponse,HttpResponseForbidden
from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm 
# from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.views import LoginView
# from .forms import LoginForm
# from .utils import authenticate_user
# from django.contrib.auth.models import User as Us

# from .models import Profile
from .forms import CustomUserCreationForm,CustomAuthenticationForm
from .models import CustomUser


def sa_or_sb_required(user):
    return user.groups.filter(name__in=['SA', 'NM']).exists()

def register_view(request):
    if request.user.is_authenticated:
        # ผู้ใช้ได้ทำการล็อคอินแล้ว ให้แสดงหน้าเว็บไซต์ที่ผู้ใช้ได้เข้าสู่ระบบไว้
        return render(request, 'loggedin.html')
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            groups = form.cleaned_data.get('groups')
            for groups in groups:
                user.groups.add(groups)
            login(request, user)
            return redirect('User:createUser')
    
    form = CustomUserCreationForm()
    return render(request, 'User/register.html', {'form': form})


# @login_required
# @user_passes_test('sa_or_sb_required')
def home(request):
    return render(request, 'home.html')

def login_view(request):
    if request.user.is_authenticated:
        # ผู้ใช้ได้ทำการล็อคอินแล้ว ให้แสดงหน้าเว็บไซต์ที่ผู้ใช้ได้เข้าสู่ระบบไว้
        return render(request, 'loggedin.html')
    if request.method == 'POST':
        form = CustomAuthenticationForm(data=request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(request, email=email, password=password)
            print(email,password,user)
            if user is not None:
                login(request, user)
                # Redirect the user to the appropriate dashboard based on their group membership
                if user.groups.filter(name='SA').exists():
                    return redirect('User:createUser')
                else:
                    return redirect('User:createUser')
            else:
                # Display an error message if the authentication fails
                form.add_error(None, 'Invalid email or password.')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'User/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('User:login')

# def register_request(request):
#     if request.method == "POST":
#         form = NewUserForm(request.POST)
#         print(NewUserForm(request.POST))
#         print(form.is_valid())
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             messages.success(request, "Registration successful." )
#             return redirect("User:createUser")
#         messages.error(request, "Unsuccessful registration. Invalid information.")
#     form = NewUserForm()
#     return render (request=request, template_name="User/register.html", context={"form":form})

# def login_request(request):
#     if request.method == "POST":
#         form = AuthenticationForm(data=request.POST)
#         print(form.is_valid())
#         print('test')
#         if form.is_valid():
#             username = form.cleaned_data.get('username')
#             password = form.cleaned_data.get('password')
#             user = form.get_user()
#             user = authenticate(username=username, password=password)
#             print(user)
#             if user is not None:
#                 login(request, user)
#                 messages.info(request, f"You are now logged in as {username}.")
#                 return redirect("User:createUser")
#             else:
#                 messages.error(request,"Invalid username or password.")
#         else:
#             messages.error(request,"Invalid username or password.")
#     form = AuthenticationForm()
#     return render(request,"User/login.html", context={"form":form})

# def logout_request(request):
# 	logout(request)
# 	messages.info(request, "You have successfully logged out.") 
# 	return redirect("User:login")

# def profile(request):
#         user = Profile.objects.all()
#         context={'user':user}
#         return render(request,'User/profile.html',context)
    
# @login_required(login_url='/User/login')
def createUser(request):
    form = CustomUserCreationForm()
    context={'form':form}
    return render(request,'User/registers.html',context)

# def updateUser(request,user_id):
#     user_update=Profile.objects.get(id=user_id)
#     if user_update.data_user!=request.user:
#         return HttpResponseForbidden()
#     form = UserForm(instance=user_update)
#     if request.method=='POST':
#         form = UserForm(request.POST,instance=user_update)
#         if form.is_valid():
#             form.save()
#             return redirect('/')
    
#     context={'form':form}
#     return render(request,'User/register.html',context)

# def deleteUser(request,user_id):
    
#     user_delete=Profile.objects.get(id=user_id)
#     if user_delete.data_user!=request.user:
#         return HttpResponseForbidden()
#     if request.method=='POST':
#         user_delete.delete()
#         return redirect('/')
            
#     context={'item':user_delete}
#     return render(request,'User/register.html',context)