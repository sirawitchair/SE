import datetime

from django.db import models
from apps.Userdata.models import CustomUser


# Create your models here.
class SA(models.Model):
        full_name = models.CharField(verbose_name = 'ชื่อผู้ฝาก', max_length = 150)
        status = models.BooleanField(verbose_name='Status', default = False)
        image = models.ImageField(verbose_name='Image',upload_to='images/')
        description = models.TextField(verbose_name='Description')
        location = models.CharField(verbose_name='Location',max_length=50)
        date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
        time = models.TimeField(verbose_name='Time',auto_now_add=True)
        data_user_sa = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, related_name='SAUser', blank = True, null = True, verbose_name = 'Recoder')
        
        class Meta:
            verbose_name_plural = 'Table SA'