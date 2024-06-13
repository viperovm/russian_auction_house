from rest_framework import serializers
from .models import Painting, PaintingImages


class PaintingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingImages
        fields = '__all__'


class PaintingSerializer(serializers.ModelSerializer):
    painting_gallery = PaintingImageSerializer(read_only=True, many=True)

    class Meta:
        model = Painting
        fields = '__all__'

