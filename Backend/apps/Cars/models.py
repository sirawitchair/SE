import datetime

from django.db import models
from apps.Userdata.models import CustomUser
# Create your models here.

CHOICE_TYPE=(
    ('CH',"CHAdeMo"),
    ('GB',"GB/T"),
    ('CCST1',"CCS Type1"),
    ('CCST2',"CCS Type2"),
    ('T1',"Type1"),
    ('T2',"Type2")
)

CHOICE_CAR=(
    ('Se',"Sedan"),
    ('Hat',"Hatchback"),
    ('Stat',"Station Wagon"),
    ('Cros',"Crossover"),
    ('SU',"SUV"),
    ('PP',"PPV"),
    ('PU',"Pickup"),
    ('MM',"Mini MPV"),
    ('Van',"Van"),
    ('Cab',"Cabrio"),
    ('Sport',"Sportcar"),
)



class Cars(models.Model):
        image = models.ImageField(verbose_name='Image',upload_to='images/',blank=True,null=True)
        model = models.CharField(verbose_name = 'Model', max_length=10,blank=True,null=True)
        acceleration = models.CharField(verbose_name='Acceleration' ,max_length=10,blank=True,null=True)
        topspeed = models.CharField(verbose_name='TopSpeed',max_length=10,blank=True,null=True)
        range = models.CharField(verbose_name='Range',max_length=10,blank=True,null=True)
        horsepower = models.CharField(verbose_name='HorsePower',max_length=10,blank=True,null=True)
        batterycapacity = models.CharField(verbose_name='BatteryCapacity',max_length=10,blank=True,null=True)
        chargingtype = models.CharField(verbose_name='ChargingType',choices = CHOICE_TYPE,default=None,blank=True,null=True,max_length = 10)
        slowchargetime = models.CharField(verbose_name='SlowChargeTime',max_length=10,blank=True,null=True)
        fastchargetime = models.CharField(verbose_name='FastChargeTime',max_length=10,blank=True,null=True)
        cartype = models.CharField(verbose_name='CarType',choices = CHOICE_CAR,default=None,blank=True,null=True,max_length = 10)
        seat = models.CharField(verbose_name='Seat',max_length=10,blank=True,null=True)
        modelyear = models.CharField(verbose_name='ModelYear',max_length=10,blank=True,null=True)
        date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
        data_user_cars = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, related_name='CarsUser', blank = True, null = True, verbose_name = 'Recoder')
        
        class Meta:
            verbose_name_plural = 'Cars'