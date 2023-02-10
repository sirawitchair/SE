import datetime

from django.db import models

CHOICE_PERMIS=(
    (0,"User"),
    (1,"SA"),
    (2,"")
)

CHOICE_GENDER=(
    (0,"Male"),
    (1,"Female"),
    (2,"Other")
)

class User(models.Model):
 
        permission = models.PositiveIntegerField(verbose_name="Permission", choices = CHOICE_PERMIS, default = 0, null=True, blank=True)
        email = models.EmailField(verbose_name='Email',max_length = 70,unique=True)
        password=models.CharField(verbose_name='Password',max_length=20)
        first_name = models.CharField(verbose_name = 'FirstName', max_length = 50)
        last_name = models.CharField(verbose_name = 'LastName', max_length = 50)
        sex = models.CharField(verbose_name = 'Sex', max_length = 2, choices =CHOICE_GENDER, default = 0)
        birth_day  = models.DateField(verbose_name = 'Birthday')
        mobile  = models.CharField(verbose_name = 'Phonenumber', max_length = 10)
        person_id = models.CharField(verbose_name = 'Person ID', max_length = 13, unique = True)
        address = models.TextField(verbose_name = 'Address')
        date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
        
        class Meta:
            verbose_name_plural = 'User'