from django.contrib import admin
from .models import Page
from adminsortable2.admin import SortableAdminMixin


class PageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['my_order', 'name', 'url', 'is_active']


admin.site.register(Page, PageAdmin)

