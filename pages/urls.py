from rest_framework.routers import DefaultRouter
from .views import PagesViewSet


router = DefaultRouter()
router.register(r'pages', PagesViewSet, basename='pages')

urlpatterns = []

urlpatterns += router.urls