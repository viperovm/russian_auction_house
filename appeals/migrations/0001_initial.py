# Generated by Django 4.2.8 on 2024-06-24 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=170, null=True, verbose_name='Имя')),
                ('phone', models.CharField(blank=True, max_length=25, null=True, verbose_name='Телефон')),
                ('email', models.CharField(blank=True, max_length=170, null=True, verbose_name='Email')),
                ('message', models.TextField(blank=True, null=True, verbose_name='Сообщение')),
            ],
            options={
                'verbose_name': 'Обращение',
                'verbose_name_plural': 'Обращения',
                'ordering': ['-id'],
            },
        ),
    ]
