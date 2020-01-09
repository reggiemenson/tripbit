from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.contrib.auth import get_user_model

from .models import Town, Badge, Trip, Group
from .serializers import TripSerializer, BadgeSerializer, GroupSerializer

User = get_user_model()

# Create your views here.

# TownsView 
# /towns
# GET all towns: list all towns
# PUT all towns: posts a user to the towns they selected


# BadgesView
# /badges
# GET all badges: list all badges

# IndividualBadgeView
# /badges/pk
# PUT badge: posts a user to that badge


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

class GroupsView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request):
        groups = Group.objects.all()
        serializer = GroupSerializer(groups, many=True)

        return Response(serializer.data)

    def post(self, request):
        request.data['owner'] = request.user.id
        request.data['members'] = (request.user.id, )
        group = GroupSerializer(data=request.data)
        if group.is_valid():
            group.save()
            return Response(group.data, status=HTTP_201_CREATED)
        return Response(group.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

# IndividualGroupView
# /groups/pk
# GET group: get individual group
# PUT, DEL: allow user to alter group if they are the owner

class IndividualGroupView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        group = Group.objects.get(pk=pk)
        serializer = GroupSerializer(group)

        return Response(serializer.data)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        group = Group.objects.get(pk=pk)
        updated_group = GroupSerializer(group, data=request.data)
        if (updated_group.is_valid()):
            group = updated_group
            group.save()
            return Response(group.data)
        return Response(updated_group.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        group = Group.objects.get(pk=pk)
        group.delete()
        return Response(status=HTTP_204_NO_CONTENT)


# GroupRequestView
# groups/pk/request
# PUT: allow any user to request membership

class GroupRequestView(APIView):

    permission_classes = (IsAuthenticated, )



# GroupApproveView
# groups/pk/approve
# PUT: allow admin user to approve members
