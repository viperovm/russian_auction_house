from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import debug_toolbar
from russian_auction_house import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include("contacts.urls")),
]

if settings.DEBUG:
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

admin.site.site_header = 'Администрирование Русский Аукционный Дом'
