from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class Page(models.Model):
    name = models.CharField(max_length=80, verbose_name='Название страницы', blank=False, null=False)
    url = models.CharField(max_length=80, verbose_name='url', blank=False, null=False)
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
