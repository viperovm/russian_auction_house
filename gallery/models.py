from django.db import models
from utils.image_crop import create_crop_wout_tmb, get_tmb_path
import os
from django.template.defaultfilters import slugify
from unidecode import unidecode
from django.utils.text import slugify
from services.utils import unique_slugify
from django_ckeditor_5.fields import CKEditor5Field


def image_directory_path(instance, filename):
    name, extension = os.path.splitext(filename)
    folder = 'painting_images'
    if len(folder) > 75:
        folder = folder[:75]
    return '{0}/{1}{2}'.format(folder, slugify(unidecode(name)), '.jpg')


class Painting(models.Model):
    name = models.CharField(max_length=170, verbose_name='Название картины', blank=False, null=False)
    artist = models.CharField(max_length=255, verbose_name='Художник', null=True, blank=True)
    price = models.PositiveIntegerField(verbose_name='Цена', null=True, blank=True)
    new_price = models.PositiveIntegerField(verbose_name='Новая цена', null=True, blank=True)
    discount = models.PositiveIntegerField(verbose_name='Размер скидки', null=True, blank=True)
    new = models.BooleanField(verbose_name='Новинка', )
    short_description = models.TextField(verbose_name='Короткое описание', null=True, blank=True)
    description = CKEditor5Field(verbose_name='Описание картины', null=True, blank=True, config_name='default')
    slug = models.CharField(verbose_name='Url', blank=True)
    my_order = models.PositiveIntegerField(verbose_name='Сорт.', default=0, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Картина'
        verbose_name_plural = 'Картины'
        ordering = ['my_order']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = unique_slugify(self, '{}-{}'.format(self.artist, self.name))
        super().save(*args, **kwargs)


class PaintingImages(models.Model):
    image = models.ImageField(verbose_name='Фото', max_length=255, upload_to=image_directory_path)
    image_painting = models.ForeignKey(Painting, on_delete=models.CASCADE, verbose_name='Картина',
                                       related_name='painting_gallery', blank=False, null=False)

    class Meta:
        verbose_name = 'Фотография картины'
        verbose_name_plural = 'Фотографии картины'
        ordering = ['id']

    def __str__(self):
        return self.image.path

    def save(self, *args, **kwargs):
        super(PaintingImages, self).save()
        if not os.path.isfile(get_tmb_path(self)):
            create_crop_wout_tmb(self)
