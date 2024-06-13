from rest_framework.routers import DefaultRouter
from .views import MessageViewSet


router = DefaultRouter()
router.register(r'appeal', MessageViewSet, basename='appeal')

urlpatterns = []

urlpatterns += router.urls