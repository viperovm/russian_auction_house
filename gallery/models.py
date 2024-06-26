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


def banner_directory_path(instance, filename):
    name, extension = os.path.splitext(filename)
    folder = 'banners'
    if len(folder) > 75:
        folder = folder[:75]
    return '{0}/{1}{2}'.format(folder, slugify(unidecode(name)), '.jpg')


class Painting(models.Model):
    name = models.CharField(max_length=170, verbose_name='Название лота', blank=False, null=False)
    is_active = models.BooleanField(verbose_name='Активный лот', )
    artist = models.CharField(max_length=255, verbose_name='Автор', null=True, blank=True)
    price = models.PositiveIntegerField(verbose_name='Цена', null=True, blank=True)
    new_price = models.PositiveIntegerField(verbose_name='Новая цена', null=True, blank=True)
    discount = models.PositiveIntegerField(verbose_name='Размер скидки', null=True, blank=True)
    new = models.BooleanField(verbose_name='Новинка', )
    short_description = models.TextField(verbose_name='Короткое описание', null=True, blank=True)
    description = CKEditor5Field(verbose_name='Описание лота', null=True, blank=True, config_name='default')
    slug = models.CharField(verbose_name='Url', blank=True)
    my_order = models.PositiveIntegerField(verbose_name='Сорт.', default=0, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Лот'
        verbose_name_plural = 'Лоты'
        ordering = ['my_order']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = unique_slugify(self, '{}-{}'.format(self.artist, self.name))
        super().save(*args, **kwargs)


class PaintingImages(models.Model):
    image = models.ImageField(verbose_name='Фото', max_length=255, upload_to=image_directory_path)
    image_painting = models.ForeignKey(Painting, on_delete=models.CASCADE, verbose_name='Лот',
                                       related_name='painting_gallery', blank=False, null=False)

    class Meta:
        verbose_name = 'Фотография лота'
        verbose_name_plural = 'Фотографии лотов'
        ordering = ['id']

    def __str__(self):
        return self.image.path

    def save(self, *args, **kwargs):
        super(PaintingImages, self).save()
        if not os.path.isfile(get_tmb_path(self)):
            create_crop_wout_tmb(self)


class PaintingRequests(models.Model):
    name = models.CharField(max_length=170, verbose_name='Имя', blank=True, null=True)
    phone = models.CharField(max_length=25, verbose_name='Телефон', blank=True, null=True)
    email = models.CharField(max_length=170, verbose_name='Email', blank=True, null=True)
    extra = models.TextField(verbose_name='Дополнительная информация', null=True, blank=True)
    requested_painting = models.ForeignKey(Painting, on_delete=models.SET_NULL, verbose_name='Предмет запроса',
                                           related_name='painting_requests', blank=True, null=True)

    class Meta:
        verbose_name = 'Запрос на приобретение'
        verbose_name_plural = 'Запросы на приобретение'
        ordering = ['-id']

    def __str__(self):
        return self.requested_painting.name


class Banners(models.Model):

    CHOICES = (
        ('left', 'Слева'),
        ('right', 'Справа'),
    )

    title = models.CharField(max_length=255, verbose_name='Заголовок', blank=False, null=False)
    subtitle = models.CharField(max_length=255, verbose_name='Подзаголовок', blank=True, null=True)
    text = models.TextField(max_length=500, verbose_name='Текст', blank=True, null=True)
    text_position = models.CharField(verbose_name='Расположение текста', choices=CHOICES, default='right', blank=False)
    image = models.ImageField(verbose_name='Изображение', blank=False, null=False, max_length=255, upload_to=banner_directory_path)
    is_active = models.BooleanField(verbose_name='Активный баннер', default=True)
    link_1_name = models.CharField(max_length=255, verbose_name='Название ссылки 1', blank=True, null=True)
    link_1_url = models.CharField(max_length=255, verbose_name='Ссылка 1', blank=True, null=True)
    link_2_name = models.CharField(max_length=255, verbose_name='Название ссылки 2', blank=True, null=True)
    link_2_url = models.CharField(max_length=255, verbose_name='Ссылка 2', blank=True, null=True)

    class Meta:
        verbose_name = 'Баннер'
        verbose_name_plural = 'Баннеры'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super(Banners, self).save()
        if not os.path.isfile(get_tmb_path(self)):
            create_crop_wout_tmb(self, crop_width=1190, crop_height=595)
