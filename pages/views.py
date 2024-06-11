from django.shortcuts import render
from rest_framework import viewsets
from .models import Page
from .serializers import PageSerializer


class PagesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Page.objects.all().exclude(is_active=False)
    serializer_class = PageSerializer
