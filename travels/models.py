from django.db import models


# Create your models here.

class Town(models.Model):
    name = models.CharField(max_length=255)
    name_ascii = models.CharField(max_length=255)
    lat = models.CharField(max_length=255)
    lng = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    iso2 = models.CharField(max_length=255, null=True)
    iso3 = models.CharField(max_length=255, null=True)
    admin_name = models.CharField(max_length=255, null=True)
    capital = models.CharField(max_length=255, null=True)
    population = models.IntegerField(null=True)

    def __str__(self):
        return f'{self.name} - {self.country}'
