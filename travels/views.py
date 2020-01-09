from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Town, Trip, Badge, Group
from .serializers import TripSerializer, PopulatedTripSerializer, BadgeSerializer, PopulatedBadgeSerializer, UserSerializer

# Create your views here.

# TownsView
# /towns
# GET all towns: list all towns
# PUT all towns: posts a user to the towns they selected


# BadgesView
# /badges
# GET all badges: list all badges

class BadgesView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        badges = Badge.objects.all()
        serialized_badges = BadgeSerializer(badges, many=True)
        return Response(serialized_badges.data)


# IndividualBadgeView
# /badges/pk
# PUT badge: posts a user to that badge

class IndividualBadgeView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request, pk):
        badge = Badge.objects.get(pk=pk)
        serialized_badge = BadgeSerializer(badge)
        return Response(serialized_badge.data)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
    # Not sure about this -  we want to select any user -not just the one who is requesting?

        badge = Badge.objects.get(pk=pk)
        updated_badge = BadgeSerializer(
            badge, data=request.user.id)  # User ID or just User??
        if updated_badge.is_valid():
            updated_badge.save()
            return Response(updated_badge.data)
        return Response(updated_badge.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


# TripsView
# /trips
# POST all cities: user posts a trip

class TripsView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        trips = Trip.objects.all()
        serialized_trips = TripSerializer(trips, many=True)
        return Response(serialized_trips.data)
#this just gets all trips, but have realised we probably want it to be just the user's trips?

    def post(self, request):
        request.data['owner'] = request.user.id
        trip = TripSerializer(data=request.data)
        if trip.is_valid():
            trip.save()
            return Response(trip.data, status=HTTP_201_CREATED)
        return Response(trip.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


# IndividualTripView
# /trips/pk
# PUT, DEL: allow user to alter trip detail if they are the owner











# GroupsView
# /groups
# GET all groups: overview of all groups (for search)
# POST all groups: user posts a new group and becomes owner

# IndividualGroupView
# /groups/pk
# GET group: get individual group
# PUT, DEL: allow user to alter group if they are the owner

# GroupRequestView
# groups/pk/request
# PUT: allow any user to request membership

# GroupApproveView
# groups/pk/approve
# PUT: allow admin user to approve members
