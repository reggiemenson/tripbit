from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Town, Trip, Badge, Group
User = get_user_model()

class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'score', 'dexterity', 'image')

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


# class PopulatedTripSerializer(UserSerializer):
#     user = UserSerializer()

class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'name', 'description', 'owner', 'members', 'requests', 'podium_1_user', 'podium_2_user', 'podium_3_user', 'podium_1_score', 'podium_2_score', 'podium_3_score')
        extra_kwargs = {
            'members': {'required': False},
            'requests': {'required': False},
            'podium_1_user': {'required': False},
            'podium_2_user': {'required': False},
            'podium_3_user': {'required': False},
            'podium_1_score': {'required': False},
            'podium_2_score': {'required': False},
            'podium_3_score': {'required': False}
        }

class TownSerializer(serializers.ModelSerializer):

    class Meta:
        model = Town
        fields = ('id', 'name', 'name_ascii', 'lat', 'lng', 'country', 'iso2', 'iso3', 'admin_name', 'capital', 'population', 'visitors')
        extra_kwargs = {
            'iso2': {'required': False}, 
            'iso3': {'required': False}, 
            'admin_name': {'required': False},
            'capital': {'required': False},
            'population': {'required': False},
            'visitors': {'required': False}
        }

class PopulatedGroupSerializer(GroupSerializer):

    owner = UserSerializer() 
    members = UserSerializer(many=True)
    requests = UserSerializer(many=True)
    podium_1_user = UserSerializer() 
    podium_2_user = UserSerializer() 
    podium_3_user = UserSerializer() 

class PopulatedTownSerializer(TownSerializer):

    visitors = UserSerializer(many=True)

