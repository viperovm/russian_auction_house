from django.contrib import admin
from .models import Stream


class StreamAdmin(admin.ModelAdmin):
    model = Stream
    list_display = ['name', 'is_active']
    list_display_links = ('name',)
    list_editable = ('is_active', )


admin.site.register(Stream, StreamAdmin)
