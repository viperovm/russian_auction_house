from rest_framework.routers import DefaultRouter
from .views import PaintingViewSet, PaintingRequestsViewSet


router = DefaultRouter()
router.register(r'painting', PaintingViewSet, basename='painting')
router.register(r'painting_request', PaintingRequestsViewSet, basename='painting_request')

urlpatterns = []

urlpatterns += router.urls