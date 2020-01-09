from django.urls import path
from .views import ListView, DetailView, OwnerListView, BadgesView, IndividualBadgeView

urlpatterns = [
    # path('', ListView.as_view()),
    # path('<int:pk>/', DetailView.as_view()),
    # path('owners/', OwnerListView.as_view())
    path('badges', BadgesView.as_view()), 
    path('badges/<int:pk>/', IndividualBadgeView.as_view()), 

]