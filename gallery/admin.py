from django.contrib import admin
from django.utils.safestring import mark_safe
from adminsortable2.admin import SortableAdminMixin
from .models import PaintingImages, Painting, PaintingRequests


class PaintingImageAdmin(admin.ModelAdmin):
    model = PaintingImages
    list_display = ('get_photo', 'get_painting_name')
    list_display_links = ('get_photo',)

    @admin.display(description='Миниатюра')
    def get_photo(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image}" width="55">')
        else:
            return '-'

    @admin.display(description='Картина')
    def get_painting_name(self, obj):
        if obj.image_painting:
            if obj.image_painting.name:
                return obj.image_painting.name
            else:
                return '-'
        else:
            return '-'


class PaintingImageInline(admin.TabularInline):
    model = PaintingImages
    readonly_fields = ('get_photo',)
    fieldsets = ((None, {'fields': ('get_photo', 'image')}),)
    extra = 4

    def get_photo(self, obj):
        if obj.image:
            return mark_safe(f'<a href={obj.image.url} target="_blank"><img src="{obj.image.url}" width="45"></a>')
        else:
            return '-'

    get_photo.short_description = 'Миниатюра'


class PaintingAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['my_order', 'name', 'artist', 'new', 'price']
    inlines = [
        PaintingImageInline,
    ]


def get_photo(obj):
    if obj.image:
        return mark_safe(f'<a href={obj.image.url} target="_blank"><img src="{obj.image.url}" width="45"></a>')
    else:
        return '-'


class PaintingRequestsAdmin(admin.ModelAdmin):
    list_display = ['requested_painting', 'artist', 'name', 'phone', 'email']


admin.site.register(PaintingImages)
admin.site.register(Painting, PaintingAdmin)
admin.site.register(PaintingRequests, PaintingRequestsAdmin)
