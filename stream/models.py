from django.db import models


class Stream(models.Model):

    CHOICES = (
        ('vk', 'VK'),
        ('youtube', 'YouTube'),
    )

    name = models.CharField(max_length=80, verbose_name='Название стрима', blank=False, null=False)
    source = models.CharField(verbose_name='Источник', choices=CHOICES, default='vk', blank=False)
    url = models.CharField(max_length=80, verbose_name='Ссылка', blank=False, null=False)
    is_active = models.BooleanField(verbose_name='Активный стрим', default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Стрим'
        verbose_name_plural = 'Стримы'
