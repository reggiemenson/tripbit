from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):

    ORIENTATION = (
        ('LH', 'Left-Handed'),
        ('RH', 'Right-Handed'),
    )

    # custom fields here...
    email = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=500, null=True, blank=True)
    score = models.IntegerField(null=True, blank=True)
    dexterity = models.CharField(max_length=2, choices=ORIENTATION, default='RH')