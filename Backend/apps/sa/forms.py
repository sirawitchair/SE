from django import forms 
from .models import SA
# Create your views here.
class SAforms(forms.ModelForm):
    class Meta:
        model = SA
        fields = "__all__"
        exclude = ('date',)
        
        widgets = {
            'full_name' : forms.TextInput(attrs={'placeholder': 'Fullname'}),
            'location' : forms.TextInput(attrs={'placeholder': 'Location'}),
            'date' : forms.DateInput(format=('%Y-%m-%d'),attrs={'type': 'date'}),
            # 'image' : forms.(format=('%Y-%m-%d'),attrs={'type': 'date'}),       
            'description' : forms.Textarea(attrs={'rows':2}),            
        }