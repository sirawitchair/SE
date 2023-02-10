from django.urls import path, include
from rest_framework import routers

from .viewsets import CarsViewSet


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('Cars', CarsViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]