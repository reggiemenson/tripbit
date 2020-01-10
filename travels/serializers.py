from rest_framework import serializers
from django.contrib.auth import get_user_model
from jwt_auth.views import UserSerializer
from .models import Town, Trip, Badge, Group
User = get_user_model()


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('id', 'name', 'start_date', 'end_date', 'user')

class PopulatedTripSerializer(TripSerializer):
    user = UserSerializer()

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ('id', 'name', 'description', 'image', 'owner')

class PopulatedBadgeSerializer(BadgeSerializer):
    user = UserSerializer()


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

