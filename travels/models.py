from django.db import models



#THIS IS THE CODE FOR IMPORTING THE USER MODEL WHEN READY
# from django.contrib.auth import get_user_model
# User = get_user_model()


# MODELS BELOW

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


class Trip(models.Model):

    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    towns = models.ManyToManyField( 
      Town,
      related_name='trips', 
      blank=True
    )
    notes = models.CharField(max_length=5000, null=True)
    owner = models.ForeignKey( 
        User,
        related_name='trips', 
        on_delete=models.CASCADE 
    )


class Badge(models.Model):

    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    image = models.CharField(max_length=100)
    users = models.MsnyToManyField(
        User,
        models.SET_NULL,
        blank=True,
        null=True,
    )


class Group(models.Model):

    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    podium_1_score = models.IntegerField(null=True, blank=True)
    podium_2_score = models.IntegerField(null=True, blank=True)
    podium_3_score = models.IntegerField(null=True, blank=True)
    owner = models.ForeignKey( 
        User,
        related_name='groups', 
        on_delete=models.CASCADE 
    )
    podium_1_User = models.ForeignKey(
        User,
        related_name='groups'
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    podium_2_User = models.ForeignKey(
        User,
        related_name='groups'
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    podium_3_User = models.ForeignKey(
        User,
        related_name='groups'
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
