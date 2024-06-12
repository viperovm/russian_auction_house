from django.contrib import admin
from .models import Page
from adminsortable2.admin import SortableAdminMixin


class PageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'url', 'description', 'is_active', 'my_order']


admin.site.register(Page, PageAdmin)

