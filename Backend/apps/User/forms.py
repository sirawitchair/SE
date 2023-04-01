from django.contrib.auth.forms import AuthenticationForm
from django.forms import ModelForm
from django import forms 
# from django.contrib.auth.models import User 
from django.contrib.auth.forms import UserCreationForm

from .models import User

# class UserCF(UserCreationForm):
#     email = forms.EmailField()

#     class Meta:
#         model = us
#         fields = ['username', 'email', 'password1', 'password2']
#         widgets = {
#             'username' : forms.TextInput(attrs={'placeholder': 'First Name','class': 'form-control form-control-lg'}),
#             'email' : forms.TextInput(attrs={'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'}),            
#             'password1' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
#             'password2' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
#         }


class UserForm(ModelForm) :
    class Meta:
        model = User
        fields = '__all__'
        exclude = ('date',)
        
        widgets = {
            'first_name' : forms.TextInput(attrs={'placeholder': 'First Name','class': 'form-control form-control-lg'}),
            'last_name' : forms.TextInput(attrs={'placeholder': 'Last Name','class': 'form-control form-control-lg'}),
            'birth_day' : forms.DateInput(format=('%Y-%m-%d'),attrs={'type': 'date' ,'class': 'form-control form-control-lg'}),
            'person_id' : forms.TextInput(attrs={'placeholder': 'Person ID','class': 'form-control form-control-lg'}),
            'password' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
            'mobile' : forms.TextInput(attrs={'placeholder': 'Phone Number','class': 'form-control form-control-lg'}),
            'email' : forms.EmailInput(attrs={'placeholder': 'Email','type':'email','class': "form-control form-control-lg"}), 
            'address' : forms.TextInput(attrs={'class':'form-control form-control-lg'}),
            'permission':forms.Select(attrs={'class':'col-md-1.5 mb-4',},),
            # 'sex':forms.Select(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),
            # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'},choices=0),      
            # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),   
            'sex':forms.Select(attrs={'class':'col-md-1.5 mb-4',},)
        }
        
class LoginForm(forms.Form):
    email = forms.EmailField(max_length=65, widget=forms.EmailInput)
    password = forms.CharField(max_length=65, widget=forms.PasswordInput)
    #  class Meta:
    #     model = User
    #     fields = ['email','password']
    #     exclude = ('date',)
    #     widgets = {
    #         'email' : forms.EmailInput(attrs={'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'}),            
    #         'password' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
    #     }