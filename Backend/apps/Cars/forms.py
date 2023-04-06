from django import forms 
from .models import Cars
# Create your views here.

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

class Carsforms(forms.ModelForm):
    class Meta:
        model = Cars
        fields = "__all__"
        exclude = ('date',)
        
        widgets = {
            'image' : forms.ImageField(),
            'model' : forms.TextInput(attrs={'placeholder': 'Model','class': 'form-control form-control-lg'}),
            'acceleration' : forms.TextInput(attrs={'placeholder': 'Acceleration','class': 'form-control form-control-lg'}),  
            'topspeed' : forms.TextInput(attrs={'placeholder': 'TopSpeed','class': 'form-control form-control-lg'}),   
            'range' : forms.TextInput(attrs={'placeholder': 'Range','class': 'form-control form-control-lg'}),   
            'horsepower' : forms.TextInput(attrs={'placeholder': 'Horsepower','class': 'form-control form-control-lg'}),   
            'batterycapacity' : forms.TextInput(attrs={'placeholder': 'Batterycapacity','class': 'form-control form-control-lg'}),   
            'chargingtype' : forms.Select(choices=CHOICE_TYPE,attrs={'class': 'form-control form-control-lg'}),   
            'slowchargetime' : forms.TextInput(attrs={'placeholder': 'Slowchargetime','class': 'form-control form-control-lg'}),   
            'fastchargetime' : forms.TextInput(attrs={'placeholder': 'Fastchargetime','class': 'form-control form-control-lg'}),      
            'cartype' : forms.Select(choices=CHOICE_CAR,attrs={'class': 'form-control form-control-lg'}),   
            'seat' : forms.TextInput(attrs={'placeholder': 'Seat','class': 'form-control form-control-lg'}),   
            'modelyear' : forms.TextInput(attrs={'placeholder': 'ModelYear','class': 'form-control form-control-lg'}),         
        }