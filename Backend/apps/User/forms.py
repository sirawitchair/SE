from django.forms import ModelForm
from .models import User
from django import forms 

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
            'email' : forms.TextInput(attrs={'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'}),            
            'address' : forms.TextInput(attrs={'class':'form-control form-control-lg'}),
            'permission':forms.Select(attrs={'class':'col-md-1.5 mb-4',},),
            # 'sex':forms.Select(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),
            # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'},choices=0),      
            # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),   
            'sex':forms.Select(attrs={'class':'col-md-1.5 mb-4',},)
        }