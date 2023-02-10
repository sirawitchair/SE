from .models import Cars
from rest_framework import serializers

# Serializers define the API representation.
class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cars
        fields = "__all__"