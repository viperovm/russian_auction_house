from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Painting
from .serializers import PaintingSerializer


class PaintingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'
