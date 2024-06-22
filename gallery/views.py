from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Painting, PaintingRequests, Banners
from .serializers import PaintingSerializer, PaintingRequestsSerializer, BannersSerializer


class PaintingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Painting.objects.all().exclude(is_active=False)
    serializer_class = PaintingSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class PaintingRequestsViewSet(viewsets.ModelViewSet):
    queryset = PaintingRequests.objects.all()
    serializer_class = PaintingRequestsSerializer
    permission_classes = [AllowAny]


class BannersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Banners.objects.all().exclude(is_active=False)
    serializer_class = BannersSerializer
    permission_classes = [AllowAny]
