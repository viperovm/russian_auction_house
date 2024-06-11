from django.urls import path, include, re_path
from .views import obtain_email


urlpatterns = [
    path('new_user/', obtain_email, name='obtain_email'),
]
