from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import debug_toolbar
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include("contacts.urls")),
    path("api/", include("pages.urls")),
    path("api/", include("gallery.urls")),
    path("api/", include("appeals.urls")),
    path("ckeditor5/", include('django_ckeditor_5.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

admin.site.site_header = 'Администрирование Русский Аукционный Дом'
