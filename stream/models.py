from django.db import models


class Stream(models.Model):
    name = models.CharField(max_length=80, verbose_name='Название стрима', blank=False, null=False)
    url = models.CharField(max_length=80, verbose_name='Ссылка', blank=False, null=False)
    is_active = models.BooleanField(verbose_name='Активная страница', default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Стрим'
        verbose_name_plural = 'Стримы'