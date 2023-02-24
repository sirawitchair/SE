from django.urls import path, include
from rest_framework import routers

from .viewsets import UserViewSet
from .views import createUser,updateUser,deleteUser,home

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('User', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
app_name = 'User'
urlpatterns = [
    path('api/', include(router.urls)),
    path('', home, name = "home"),
    path('create_user/',createUser,name="create_user"),
    path('update_user/<user_id>',updateUser,name="update_user")
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]