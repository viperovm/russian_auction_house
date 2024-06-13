from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=170, verbose_name='Имя', blank=True, null=True)
    phone = models.CharField(max_length=25, verbose_name='Телефон', blank=True, null=True)
    email = models.CharField(max_length=170, verbose_name='Email', blank=True, null=True)
    message = models.TextField(verbose_name='Сообщение', null=True, blank=True)

    class Meta:
        verbose_name = 'Обращение'
        verbose_name_plural = 'Обращения'
        ordering = ['-id']

    def __str__(self):
        return self.name
