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
        badge = badge.objects.get(pk=pk)
       updated_post = PostSerializer(post, data=request.data)
        if updated_post.is_valid():  # again we check to see if that updated version is valid (ie follows all the rules of the model, what is/isnt required)
        updated_post.save()  # save that updated post if it was valid
        return Response(updated_post.data)  # and send it back to client
        # if it wasnt valid , send back the errors in response with a 422 status
        return Response(updated_post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


# TripsView
# /trips
# POST all cities: user posts a trip

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
