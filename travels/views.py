from django.shortcuts import render

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
