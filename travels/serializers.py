from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Town, Trip, Badge, Group
User = get_user_model()

class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ('id', 'username', 'first name', 'last name', 'score', 'dexterity', 'image')

#Michael - Do we want email included in fields above? My thought would be that there is no need to display it and it creates unnecessary privacy issues?
#Michael - I also have 'first name' and 'last name' in there - Reg says this is something that Django adds and is viewable in the admin panel - but I think we'd want this info?


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('id', 'name', 'start_date', 'end_date', 'user')

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ('id', 'name', 'description', 'image', 'owner')


class PopulatedTripSerializer(UserSerializer):
    user = UserSerializer()

class PopulatedBadgeSerializer(BadgeSerializer):
    owner = UserSerializer()


