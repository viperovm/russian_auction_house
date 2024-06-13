from rest_framework import serializers
from .models import Painting, PaintingImages, PaintingRequests
from django.core.mail import send_mail
import datetime

from django.template.loader import get_template
from django.core import mail
connection = mail.get_connection()


class PaintingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingImages
        fields = '__all__'


class PaintingSerializer(serializers.ModelSerializer):
    painting_gallery = PaintingImageSerializer(read_only=True, many=True)

    class Meta:
        model = Painting
        fields = '__all__'


class PaintingRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintingRequests
        fields = '__all__'

    def create(self, validated_data):
        instance = super(PaintingRequestsSerializer, self).create(validated_data)

        context = {
            'data': instance,
            'url': f'https://art-bid.ru/shop/{instance.requested_painting.slug}',
            'year': datetime.date.today().year,
        }
        connection.open()

        try:
            send_mail(
                'Новый заказ',
                get_template('admin_order_template_text.html').render(context),
                'Новый заказ! <info@art-bid.ru>',
                ['viperovm@yandex.ru'],
                connection=connection,
                fail_silently=False,
            )
        except Exception as e:
            print(e)

        connection.close()
        instance.save()
        return instance



