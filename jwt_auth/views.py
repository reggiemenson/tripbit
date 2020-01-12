from jwt_auth.serializers import UserSerializer, PopulatedUserSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED

from django.conf import settings
import jwt

# from .badge_logic import get_platform_badges
from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import ValidateSerializer, UserSerializer, PopulatedUserSerializer 

class RegisterView(APIView):

    def post(self, request):
        serializer = ValidateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode(
            {'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})


class ProfileView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

        # Temporary working path to edit a user. It has no additional logic inbetween.

    def put(self, request):
        serialized_user = User.objects.get(pk=request.user.id)
        updated_user = UserSerializer(serialized_user, data=request.data)
        if (updated_user.is_valid()):
            serialized_user = updated_user
            serialized_user.save()
            return Response(serialized_user.data)
        return Response(updated_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request):
        user = User.objects.get(pk=request.user.id)
        user.delete()
        return Response(status=HTTP_204_NO_CONTENT)

        # The following view is for editing the user preference points (badges, towns, etc) that will affect ranking.
        # It's the same as the one above but with space to include logic. Mine has been commented out. Note that it is on a different url path
        
class EditDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    # def put(self, request):
    #     serialized_user = User.objects.get(pk=request.user.id)
    #     updated_user = UserSerializer(serialized_user, data=request.data)
    #     if (updated_user.is_valid()):

    #         serialized_user = updated_and_ranked_user
    #         serialized_user.save()


        #  This is the point where badge logic might be entered.

    #         all_users = User.objects.all()
    #         serialized_userList = UserSerializer(all_users)
    #         
    #         get_platform_badges(serialized_userList)

        #  Possible catch to check all is fine
    #         
    #         updated_and_ranked_user = User.objects.get(pk=request.user.id)
    #         serialized_user = UserSerializer(new_request_user)
    #         serialized_user.save()

    #         return Response(serialized_user.data)
    #     return Response(updated_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class UserView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request, pk):
        user = User.objects.get(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)


    # def post(self, request, pk): 
    #         request.data['owner'] = request.user.id 
    #         request.data['post'] = pk # attach the post id from the url to comment
    #         town = TownSerializer(data=request.data) # serialize the comment
    #         if town.is_valid(): # if the comment is valid
    #             town.save() # save the comment
    #         return Response(town.errors, status=HTTP_422_UNPROCESSABLE_ENTITY) # send back any errors from the comment if it wasnt valid

    

class UserListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        users = User.objects.all()
        serialized_userList = DetailUserSerializer(users, many=True)
        return Response(serialized_userList.data)


         
