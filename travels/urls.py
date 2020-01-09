from django.urls import path
from .views import GroupsView, IndividualGroupView, GroupRequestView

urlpatterns = [
    path('groups/', GroupsView.as_view()),
    path('groups/<int:pk>/', IndividualGroupView.as_view()),
    path('groups/<int:pk>/request/', GroupRequestView.as_view()),
]