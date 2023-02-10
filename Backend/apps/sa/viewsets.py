from rest_framework import viewsets

from .models import SA
from .serializers import SASerializer


class SAViewSet(viewsets.ModelViewSet):
    queryset = SA.objects.all()
    serializer_class = SASerializer