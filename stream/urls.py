from rest_framework.routers import DefaultRouter
from .views import StreamViewSet


router = DefaultRouter()
router.register(r'stream', StreamViewSet, basename='stream')

urlpatterns = []

urlpatterns += router.urls