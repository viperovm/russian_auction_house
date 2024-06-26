# Generated by Django 4.2.8 on 2024-06-24 21:11

from django.db import migrations, models
import django.db.models.deletion
import django_ckeditor_5.fields
import gallery.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Banners',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('subtitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок')),
                ('text', models.TextField(blank=True, max_length=500, null=True, verbose_name='Текст')),
                ('text_position', models.CharField(choices=[('left', 'Слева'), ('right', 'Справа')], default='right', verbose_name='Расположение текста')),
                ('image', models.ImageField(max_length=255, upload_to=gallery.models.banner_directory_path, verbose_name='Изображение')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активный баннер')),
                ('link_1_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Название ссылки 1')),
                ('link_1_url', models.CharField(blank=True, max_length=255, null=True, verbose_name='Ссылка 1')),
                ('link_2_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Название ссылки 2')),
                ('link_2_url', models.CharField(blank=True, max_length=255, null=True, verbose_name='Ссылка 2')),
            ],
            options={
                'verbose_name': 'Баннер',
                'verbose_name_plural': 'Баннеры',
            },
        ),
        migrations.CreateModel(
            name='Painting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=170, verbose_name='Название лота')),
                ('is_active', models.BooleanField(verbose_name='Активный лот')),
                ('artist', models.CharField(blank=True, max_length=255, null=True, verbose_name='Автор')),
                ('price', models.PositiveIntegerField(blank=True, null=True, verbose_name='Цена')),
                ('new_price', models.PositiveIntegerField(blank=True, null=True, verbose_name='Новая цена')),
                ('discount', models.PositiveIntegerField(blank=True, null=True, verbose_name='Размер скидки')),
                ('new', models.BooleanField(verbose_name='Новинка')),
                ('short_description', models.TextField(blank=True, null=True, verbose_name='Короткое описание')),
                ('description', django_ckeditor_5.fields.CKEditor5Field(blank=True, null=True, verbose_name='Описание лота')),
                ('slug', models.CharField(blank=True, verbose_name='Url')),
                ('my_order', models.PositiveIntegerField(default=0, verbose_name='Сорт.')),
            ],
            options={
                'verbose_name': 'Лот',
                'verbose_name_plural': 'Лоты',
                'ordering': ['my_order'],
            },
        ),
        migrations.CreateModel(
            name='PaintingRequests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=170, null=True, verbose_name='Имя')),
                ('phone', models.CharField(blank=True, max_length=25, null=True, verbose_name='Телефон')),
                ('email', models.CharField(blank=True, max_length=170, null=True, verbose_name='Email')),
                ('extra', models.TextField(blank=True, null=True, verbose_name='Дополнительная информация')),
                ('requested_painting', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='painting_requests', to='gallery.painting', verbose_name='Предмет запроса')),
            ],
            options={
                'verbose_name': 'Запрос на приобретение',
                'verbose_name_plural': 'Запросы на приобретение',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='PaintingImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(max_length=255, upload_to=gallery.models.image_directory_path, verbose_name='Фото')),
                ('image_painting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='painting_gallery', to='gallery.painting', verbose_name='Лот')),
            ],
            options={
                'verbose_name': 'Фотография лота',
                'verbose_name_plural': 'Фотографии лотов',
                'ordering': ['id'],
            },
        ),
    ]
