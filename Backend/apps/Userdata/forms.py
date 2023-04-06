from django import forms 
from django.http import JsonResponse
from django.forms import DateInput,TextInput,EmailInput,Select,CheckboxSelectMultiple
from django.db.models import Q
from django.contrib.auth.forms import PasswordChangeForm,AuthenticationForm,UserCreationForm,UserChangeForm
from django.contrib.auth.models import Group
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser

CHOICE_GENDER=(
    ('m',"Male"),
    ('f',"Female"),
    ('o',"Other")
)
CHOICE_PERMISSION=(
    ('SA',"SA"),
    ('NM',"Nomal")
)
GROUP_CHOICES = [(groups.id, groups.name) for groups in Group.objects.all()]
# class NewUserForm(UserCreationForm):
#     # email = forms.EmailField(required=True )
#     class Meta:
#         model = User
#         fields = ("username", "email", "password1", "password2","first_name","last_name")
#         widgets = {
#                     'first_name' : forms.TextInput(attrs={'placeholder': 'First Name','class': 'form-control form-control-lg'}),
#                     'last_name' : forms.TextInput(attrs={'placeholder': 'Last Name','class': 'form-control form-control-lg'}),
#                     'password1' : forms.PasswordInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg'}),
#                     'password2' : forms.PasswordInput(attrs={'placeholder': 'Confirm-Password','class': 'form-control form-control-lg'}),
#                     'email' : forms.EmailInput(attrs={'placeholder': 'Email','type':'email','class': "form-control form-control-lg"}),
#                     'username':forms.TextInput(attrs={'placeholder': 'Username','class': 'form-control form-control-lg'})
#                     }

#     def save(self, commit=True):
#         user = super(NewUserForm, self).save(commit=False)
#         user.email = self.cleaned_data['email']
#         if commit:
#             user.save()
#         return user
class CustomUserChangeForm(UserChangeForm):
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['email'].widget.attrs.update({'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'})
        # self.fields['username'].widget.attrs.update({'placeholder': 'Username','class': 'form-control form-control-lg'})
        # self.fields['password1'].widget.attrs.update({'placeholder': 'Password','class': 'form-control form-control-lg'})
        # self.fields['password2'].widget.attrs.update({'placeholder': 'Confirmpassword','class': 'form-control form-control-lg'})
        self.fields['first_name'].widget.attrs.update({'placeholder': 'First Name','class': 'form-control form-control-lg'})
        self.fields['last_name'].widget.attrs.update({'placeholder': 'Last Name','class': 'form-control form-control-lg'})
    mobile = forms.CharField(max_length=20,widget=TextInput(attrs={'placeholder': 'Phonenumber','type': 'tel','class': 'form-control form-control-lg'}))
    address = forms.CharField(max_length=100,widget=TextInput(attrs={'class':'form-control form-control-lg'}))
    class Meta(UserChangeForm.Meta):
        model = CustomUser
        fields = ('email', 'first_name', 'last_name','mobile', 'address')
        
class PasswordChangingForm(PasswordChangeForm):
    old_password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Old Password','class': 'form-control form-control-lg','type':'password'}))
    new_password1 = forms.CharField(max_length=100, widget=forms.PasswordInput(attrs={'placeholder': 'New Password','class': 'form-control form-control-lg','type':'password'}))
    new_password2 = forms.CharField(max_length=100, widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password','class': 'form-control form-control-lg','type':'password'}))

    class Meta:
        model = CustomUser
        fields = ('old_password', 'new_password1', 'new_password2')       
        
class CustomAuthenticationForm(AuthenticationForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={ 'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={ 'placeholder': 'Password','class': 'form-control form-control-lg','type':'password'}))

    class Meta:
        model = CustomUser
        fields = ['email', 'password']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget = forms.HiddenInput()
        self.fields.pop('username')
        # self.fields('password').widget = forms.PasswordInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg'})

    def clean(self):
        email = self.cleaned_data.get('email')
        password = self.cleaned_data.get('password')

        if email and password:
            user = CustomUser.objects.filter(email=email).first()
            print(user)
            if not user:
                raise forms.ValidationError(_('Invalid email or password.'))
            elif not user.check_password(password):
                raise forms.ValidationError(_('Invalid email or password.'))
            elif not user.is_active:
                raise forms.ValidationError(_('This account is inactive.'))
        return self.cleaned_data

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField()
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['email'].widget.attrs.update({'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'})
        # self.fields['username'].widget.attrs.update({'placeholder': 'Username','class': 'form-control form-control-lg'})
        self.fields['password1'].widget.attrs.update({'placeholder': 'Password','class': 'form-control form-control-lg'})
        self.fields['password2'].widget.attrs.update({'placeholder': 'Confirmpassword','class': 'form-control form-control-lg'})
        self.fields['first_name'].widget.attrs.update({'placeholder': 'First Name','class': 'form-control form-control-lg'})
        self.fields['last_name'].widget.attrs.update({'placeholder': 'Last Name','class': 'form-control form-control-lg'})
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    sex = forms.ChoiceField(choices=CHOICE_GENDER,widget=Select(attrs={'class':'form-select form-select-lg',}))
    birth_day = forms.DateField(widget=DateInput(format=('%Y-%m-%d'),attrs={'type': 'date','class': 'form-control form-control-lg'}))
    mobile = forms.CharField(max_length=20,widget=TextInput(attrs={'placeholder': 'Phonenumber','type': 'tel','class': 'form-control form-control-lg'}))
    person_id = forms.CharField(max_length=20,widget=TextInput(attrs={'placeholder': 'Person ID','class': 'form-control form-control-lg'}))
    address = forms.CharField(max_length=100,widget=TextInput(attrs={'class':'form-control form-control-lg'}))
    # permissions = forms.ChoiceField(choices=CHOICE_PERMISSION, widget=forms.Select(attrs={'class':'form-select form-select-lg',}))
    groups = forms.ChoiceField(choices=GROUP_CHOICES, widget=forms.Select(attrs={'class':'form-select form-select-lg',}))
    # groups = forms.ModelMultipleChoiceField(queryset=Group.objects.all(), widget=forms.RadioSelect())
    class Meta:
        model = CustomUser
        fields = ('email','first_name','last_name','sex', 'birth_day', 'address', 'mobile', 'person_id','password1','password2')
#     class Meta:
#         model = Profile
#         fields = '__all__'
#         exclude = ('date',)
        
#         widgets = {
#             'first_name' : forms.TextInput(attrs={'placeholder': 'First Name','class': 'form-control form-control-lg'}),
#             'last_name' : forms.TextInput(attrs={'placeholder': 'Last Name','class': 'form-control form-control-lg'}),
#             'birth_day' : forms.DateInput(format=('%Y-%m-%d'),attrs={'type': 'date' ,'class': 'form-control form-control-lg'}),
#             'person_id' : forms.TextInput(attrs={'placeholder': 'Person ID','class': 'form-control form-control-lg'}),
#             # 'password' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
#             'mobile' : forms.TextInput(attrs={'placeholder': 'Phone Number','class': 'form-control form-control-lg'}),
#             # 'email' : forms.EmailInput(attrs={'placeholder': 'Email','type':'email','class': "form-control form-control-lg"}), 
#             'address' : forms.TextInput(attrs={'class':'form-control form-control-lg'}),
#             'permission':forms.Select(attrs={'class':'col-md-1.5 mb-4',},),
#             # 'sex':forms.Select(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),
#             # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'},choices=0),      
#             # 'sex':forms.CheckboxInput(attrs={'class':'d-md-flex justify-content-start align-items-center mb-4 py-2','type':'radio'}),   
#             'sex':forms.Select(attrs={'class':'col-md-1.5 mb-4',},)
#         }
        
# class LoginForm(forms.Form):
#     email = forms.EmailField(max_length=65, widget=forms.EmailInput)
#     password = forms.CharField(max_length=65, widget=forms.PasswordInput)
    #  class Meta:
    #     model = User
    #     fields = ['email','password']
    #     exclude = ('date',)
    #     widgets = {
    #         'email' : forms.EmailInput(attrs={'placeholder': 'Email','class': 'form-control form-control-lg','type':'email'}),            
    #         'password' : forms.TextInput(attrs={'placeholder': 'Password','class': 'form-control form-control-lg','type':"password"}),
    #     }