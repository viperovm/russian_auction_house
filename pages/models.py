from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class Page(models.Model):
    meta_title = models.TextField(verbose_name='Title', null=True, blank=True)
    meta_description = models.TextField(verbose_name='Description', null=True, blank=True)
    meta_keywords = models.TextField(verbose_name='Keywords', null=True, blank=True)
    name = models.CharField(max_length=80, verbose_name='Название страницы', blank=False, null=False)
    slug = models.CharField(max_length=80, verbose_name='url', blank=False, null=False)
    description = CKEditor5Field(verbose_name='Описание', config_name='default', null=True, blank=True)
    is_active = models.BooleanField(verbose_name='Активная страница', default=True)
    is_doc = models.BooleanField(verbose_name='Страница документа', default=True)
    my_order = models.PositiveIntegerField(verbose_name='Сорт.', default=0, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'
        ordering = ['my_order']
