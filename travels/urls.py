from django.urls import path
from .views import GroupsView, IndividualGroupView, GroupMembershipView

urlpatterns = [
    path('groups/', GroupsView.as_view()),
    path('groups/<int:pk>/', IndividualGroupView.as_view()),
    path('groups/<int:pk>/membership/', GroupMembershipView.as_view())
]