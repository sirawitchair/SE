from django.urls import path, include
from rest_framework import routers


from .views import Home
# from .viewsets import SAViewSet


# # Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register('SA', SAViewSet)

# # Wire up our API using automatic URL routing.
# # Additionally, we include login URLs for the browsable API.
app_name = 'News'
urlpatterns = [
    # path('api/', include(router.urls)),
    path('', Home,name='Home'),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]