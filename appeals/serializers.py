from rest_framework import serializers
from .models import Message
from django.core.mail import send_mail
import datetime

from django.template.loader import get_template
from django.core import mail
connection = mail.get_connection()


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'

    def create(self, validated_data):
        instance = super(MessageSerializer, self).create(validated_data)

        context = {
            'data': instance,
            'year': datetime.date.today().year,
        }

        connection.open()

        try:
            send_mail(
                'Новое обращение',
                get_template('admin_order_template_text.html').render(context),
                'Новое обращение! <info@art-bid.ru>',
                ['viperovm@yandex.ru'],
                connection=connection,
                fail_silently=False,
            )
        except Exception as e:
            print(e)

        connection.close()
        instance.save()
        return instance



