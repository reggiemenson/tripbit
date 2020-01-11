from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED

from django.conf import settings
import jwt

from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import UserSerializer, PopulatedUserSerializer 

class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
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

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})

class ProfileView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

    def put(self, request):
        serialized_user = User.objects.get(pk=request.user.id)
        updated_user = UserSerializer(serialized_user, data=request.data)
        if (updated_user.is_valid()):
            serialized_user = updated_user
            serialized_user.save()
            return Response(serialized_user.data)
        return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request):
        user = User.objects.get(pk=request.user.id)
        user.delete()
        return Response(status=HTTP_204_NO_CONTENT)

        
class RankingView(APIView):

    permission_classes = (IsAuthenticated, )

    # def put(self, request):
    #     request.data['user'] = request.user.id
    #     serialized_user = User.objects.get(pk=request.user.id)
    #     updated_user = PopulatedUserSerializer(user, data=request.data)
    #     if (updated_user.is_valid()):
    #         serialized_user = updated_user
    #         serialized_user.save()
    #         return Response(serialized_user.data)
    #     return Response(user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class UserView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request, pk):
        user = User.objects.get(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

class UserListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        users = User.objects.all()
        serialized_userList = PopulatedUserSerializer(users, many=True)
        return Response(serialized_userList.data)


         
