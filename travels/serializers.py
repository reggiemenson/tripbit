from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Town, Trip, Badge, Group
User = get_user_model()

class UserSerializer(serializers.ModelSerializer): # This user serializer is used to populate a nested owner on a post or comment

    class Meta:
        model = User
        fields = 


class TripSerializer(serializers.ModelSerializer)

    class Meta:
      model = Trip
      fields = ('id', 'name', 'start_date', 'end_date', 'user')

class BadgeSerializer(serializers.ModelSerializer)

    class Meta:
      model = Badge
      fields =('id', 'name', 'description', 'image')


# class PopulatedTripSerializer(serializers.ModelSerializer)

#     owner = UserSerializer()

