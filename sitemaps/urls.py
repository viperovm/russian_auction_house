from django.urls import path
from .sitemaps import StaticViewSitemap, DocViewSitemap, LotViewSitemap
from django.contrib.sitemaps.views import sitemap
from django.views.generic.base import TemplateView

sitemaps = {
    'static': StaticViewSitemap,
    'doc': DocViewSitemap,
    'lot': LotViewSitemap
}

urlpatterns = [
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path('robots.txt', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
]
