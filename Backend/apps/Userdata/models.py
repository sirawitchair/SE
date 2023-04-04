import datetime
from django.conf import settings
from django.db import models
from django import forms
from django.contrib.auth.models import User,AbstractBaseUser, BaseUserManager, PermissionsMixin,Permission, Group

CHOICE_PERMIS=(
    (0,"User"),
    (1,"SA"),
    (2,"")
)

CHOICE_GENDER=(
    ('m',"Male"),
    ('f',"Female"),
    ('o',"Other")
)
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class PermissionSelectField(forms.ModelMultipleChoiceField):
    def __init__(self, **kwargs):
        queryset = Group.objects.filter(name__in=['SA', 'NM'])
        super().__init__(queryset=queryset, widget=forms.CheckboxSelectMultiple, **kwargs)
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True,verbose_name='Email')
    first_name = models.CharField(verbose_name = 'Firstname', max_length = 30)
    last_name = models.CharField(verbose_name = 'LastName', max_length = 30)
    sex = models.CharField(verbose_name = 'Sex', max_length = 2, choices =CHOICE_GENDER, default = 'm')
    birth_day  = models.DateField(verbose_name = 'Birthday')
    mobile  = models.CharField(verbose_name = 'Phonenumber', max_length = 10)
    person_id = models.CharField(verbose_name = 'Person ID', max_length = 13, unique = True)
    address = models.TextField(verbose_name = 'Address')
    date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    permissions = PermissionSelectField()
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='customuser_set',
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='customuser_set',
        related_query_name='customuser',
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'sex', 'birth_day', 'mobile', 'person_id', 'address']

    objects = UserManager()
    
    def __str__(self):
        return self.email
    class Meta:
            verbose_name_plural = 'User'
            # abstract = True
            app_label = 'Userdata'