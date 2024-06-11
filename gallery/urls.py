from rest_framework.routers import DefaultRouter
from .views import PaintingViewSet


router = DefaultRouter()
router.register(r'painting', PaintingViewSet, basename='painting')

urlpatterns = []

urlpatterns += router.urls