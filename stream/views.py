from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from .models import Stream
from .serializers import StreamSerializer


class StreamViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Stream.objects.all().exclude(is_active=False)
    serializer_class = StreamSerializer
    permission_classes = [AllowAny]

