from django.forms import ModelForm
from .models import Cars

class CarForm(ModelForm) :
    class Meta:
        model = Cars
        fields = '__all__'