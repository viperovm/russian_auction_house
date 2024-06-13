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
    list_display = ['my_order', 'is_active', 'name', 'artist', 'new', 'price']
    list_display_links = ('name',)
    list_editable = ('is_active', )
    inlines = [
        PaintingImageInline,
    ]


def get_photo(obj):
    if obj.image:
        return mark_safe(f'<a href={obj.image.url} target="_blank"><img src="{obj.image.url}" width="45"></a>')
    else:
        return '-'


class PaintingRequestsAdmin(admin.ModelAdmin):
    list_display = [
        'get_painting',
        # 'requested_painting',
        'get_artist',
        'name',
        'phone',
        'email'
    ]

    def get_painting(self, obj):
        if obj.requested_painting.name and obj.requested_painting.slug:
            return mark_safe(
                f'<a href={obj.requested_painting.slug} target="_blank">{obj.requested_painting.name}</a>'
            )
        elif obj.requested_painting.name:
            return obj.requested_painting.name
        else:
            return '-'

    def get_artist(self, obj):
        if obj.requested_painting.artist:
            return obj.requested_painting.artist
        else:
            return '-'

    get_painting.short_description = 'Предмет запроса'
    get_artist.short_description = 'Автор'


admin.site.register(PaintingImages)
admin.site.register(Painting, PaintingAdmin)
admin.site.register(PaintingRequests, PaintingRequestsAdmin)
