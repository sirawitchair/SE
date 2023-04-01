from django.urls import path, include
from rest_framework import routers

from .viewsets import UserViewSet
from .views import createUser,updateUser,deleteUser,profile,login

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('User', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
app_name = 'User'
urlpatterns = [
    path('api/', include(router.urls)),
    path('login/', login, name = "login"),
    path('profile/', profile, name = "profile"),
    path('createUser/',createUser,name="createUser"),
    path('update_user/<user_id>',updateUser,name="update_user")
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]