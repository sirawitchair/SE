import datetime

from django.db import models
from apps.User.models import User


# Create your models here.
class SA(models.Model):

        Status = models.BooleanField(verbose_name='Status', default = False)
        image = models.ImageField(verbose_name='Image')
        description = models.TextField(verbose_name='Description')
        location = models.CharField(verbose_name='Location',max_length=50)
        date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
        time = models.TimeField(verbose_name='Time',auto_now_add=True)
        data_user_sa = models.ForeignKey(User,on_delete=models.SET_NULL, related_name='SAUser', blank = True, null = True, verbose_name = 'Recoder')
        
        class Meta:
            verbose_name_plural = 'Table SA'