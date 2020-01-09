from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Town, Trip, Badge, Group
User = get_user_model()

class TripSerializer(serializers.ModelSerializer)
