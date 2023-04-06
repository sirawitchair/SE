from django.urls import path, include
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from .viewsets import CarsViewSet
from .views import CarsListView,CarsCreateView,CarsUpdateView,CarsDeleteView,CarsDetailView

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('Cars', CarsViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
app_name='Cars'
urlpatterns = [
    # path('api/', include(router.urls)),
    path('', CarsListView.as_view(),name='cv'),
    path('ccv/', CarsCreateView.as_view(),name='ccv'),
    path('car/<int:pk>/update/', CarsUpdateView.as_view(),name='cud'),
    path('car/<int:pk>/delete/', CarsDeleteView.as_view(),name='cdv'),
    path('car/<int:pk>/', CarsDetailView.as_view(), name='cdt'),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
if settings.DEBUG:
     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)