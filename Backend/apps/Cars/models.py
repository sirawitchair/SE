import datetime

from django.db import models
from apps.Userdata.models import CustomUser
# Create your models here.

CHOICE_TYPE=(
    (0,"CHAdeMo"),
    (1,"GB/T"),
    (2,"CCS Type1"),
    (3,"CCS Type2"),
    (4,"Type1"),
    (5,"Type2")
)

CHOICE_CAR=(
    (0,"Sedan"),
    (1,"Hatchback"),
    (2,"Station Wagon"),
    (3,"Crossover"),
    (4,"SUV"),
    (5,"PPV"),
    (6,"Pickup"),
    (7,"Mini MPV"),
    (8,"Van"),
    (9,"Cabrio"),
    (10,"Sportcar"),
)


class Cars(models.Model):
        image = models.ImageField(verbose_name='Image',upload_to='images/')
        model = models.CharField(verbose_name = 'Model', max_length=10)
        acceleration = models.CharField(verbose_name='Acceleration' ,max_length=10)
        topspeed = models.CharField(verbose_name='TopSpeed',max_length=10)
        range = models.CharField(verbose_name='Range',max_length=10)
        horsepower = models.CharField(verbose_name='HorsePower',max_length=10)
        batterycapacity = models.CharField(verbose_name='BatteryCapacity',max_length=10)
        chargingtype = models.CharField(verbose_name='ChargingType',choices = CHOICE_TYPE,max_length=10)
        slowchargetime = models.CharField(verbose_name='SlowChargeTime',max_length=10)
        fastchargetime = models.CharField(verbose_name='FastChargeTime',max_length=10)
        cartype = models.CharField(verbose_name='CarType',choices = CHOICE_CAR,max_length=10)
        seat = models.CharField(verbose_name='Seat',max_length=10)
        modelyear = models.CharField(verbose_name='ModelYear',max_length=10)
        date = models.DateField(verbose_name = 'Date', default=datetime.date.today)
        data_user_cars = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, related_name='CarsUser', blank = True, null = True, verbose_name = 'Recoder')
        
        class Meta:
            verbose_name_plural = 'Cars'