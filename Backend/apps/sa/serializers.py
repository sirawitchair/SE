from .models import SA
from rest_framework import serializers

# Serializers define the API representation.
class SASerializer(serializers.ModelSerializer):
    class Meta:
        model = SA
        fields = "__all__"