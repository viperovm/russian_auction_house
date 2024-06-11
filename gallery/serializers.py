from rest_framework import serializers
from .models import Painting, PaintingImages


class PaintingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingImages
        fields = '__all__'


class PaintingSerializer(serializers.ModelSerializer):
    name = serializers.CharField(read_only=True)
    price = serializers.CharField(read_only=True)
    painting_gallery = PaintingImageSerializer(read_only=True, many=True)
    description = serializers.CharField(read_only=True)

    class Meta:
        model = Painting
        fields = '__all__'

