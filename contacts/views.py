from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
import requests
import json
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def obtain_email(request):

    email = request.GET.get('email', '')
    name = request.GET.get('name', '')
    phone = request.GET.get('phone', '')

    if email or name or phone:
        payload = {
            'format': 'json',
            'api_key': '67jq9emuna394a5oxghmj9io1j9rkgzrurfoifna',
            'list_ids': '3',
            'fields[email]': email,
            'fields[Name]': name,
            'fields[phone]': phone,
            'double_optin': '3',
            'overwrite': '0'
        }
        r = requests.get('https://api.unisender.com/ru/api/subscribe', params=payload)
        if r.status_code == requests.codes.ok:
            return Response(r.json(), status=status.HTTP_201_CREATED)
        else:
            return Response(r.json(), status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response('Ошибка передачи данных', status=status.HTTP_400_BAD_REQUEST)








