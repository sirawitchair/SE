from django.urls import path, include
from rest_framework import routers

from .viewsets import SAViewSet
from .views import SAListView,SACreateView
from django.conf.urls.static import static
from django.conf import settings


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('SA', SAViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
app_name = 'apps.SA'
urlpatterns = [
    path('api/', include(router.urls)),
    # path('test/', TestCreate.as_view(), name = "testcreate"),
    path('', SAListView.as_view(), name = "List"),
    path('scv/', SACreateView.as_view(), name = "scv"),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)