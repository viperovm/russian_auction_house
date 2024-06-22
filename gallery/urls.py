from rest_framework.routers import DefaultRouter
from .views import PaintingViewSet, PaintingRequestsViewSet, BannersViewSet


router = DefaultRouter()
router.register(r'painting', PaintingViewSet, basename='painting')
router.register(r'painting_request', PaintingRequestsViewSet, basename='painting_request')
router.register(r'banner', BannersViewSet, basename='banner')

urlpatterns = []

urlpatterns += router.urls