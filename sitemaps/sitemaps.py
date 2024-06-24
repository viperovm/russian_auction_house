from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from pages.models import Page
from gallery.models import Painting


class HomeViewSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.9

    def items(self):
        return Page.objects.filter(slug='/')

    def location(self, item):
        return reverse(item)


class StaticViewSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.9

    def items(self):
        return Page.objects.filter(is_doc=False).exclude(slug='/')

    def location(self, item):
        return f'/{item.slug}/'


class DocViewSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.9

    def items(self):
        return Page.objects.filter(is_doc=True)

    def location(self, item):
        return f'/{item.slug}/'


class LotViewSitemap(Sitemap):
    changefreq = 'always'
    priority = 0.9

    def items(self):
        return Painting.objects.filter(is_active=True)

    def location(self, item):
        return f'/shop/{item.slug}/'
