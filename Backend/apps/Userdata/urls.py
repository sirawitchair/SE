from django.urls import path, include
from rest_framework import routers

from .viewsets import UserViewSet
# from .views import createUser,updateUser,deleteUser,profile,login_request,register_request,logout_request
from .views import register_view,logout_view,login_view,update_view,change_password_view

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('User', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
app_name = 'apps.Userdata'
urlpatterns = [
    path('api/', include(router.urls)),
    # path('profile/', profile, name = "profile"),
    # path('createUser/',createUser,name="createUser"),
    # path('update_user/<user_id>',updateUser,name="update_user"),
    # path("register/", register_request, name="register"),
    path("register/", register_view, name="register"),
    path("login/",login_view, name="login"),
    path("logout/",logout_view, name= "logout"),
    path("profile/",update_view, name= "profile"),
    path("change/",change_password_view, name= "change"),
    # path("check_duplicate/",check_duplicate, name= "check_duplicate"),
    # path('acheck_duplicate/', include('check_duplicate', namespace='check_duplicate'))
]