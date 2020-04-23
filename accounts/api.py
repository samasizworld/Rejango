from .serializers import UserSerializer , RegisterSerializer,LoginSerializer
from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken


#register api

class RegisterAPI(generics.GenericAPIView):
    serializer_class =RegisterSerializer
    def post(self,request,*args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user= serializer.save()
        _,token= AuthToken.objects.create(user)
        return Response({"user":UserSerializer(user,context=self.get_serializer_context()).data,
        "token":token})



#login api        
class LoginAPI(generics.GenericAPIView):
    serializer_class =LoginSerializer
    def post(self,request,*args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data
        _,token= AuthToken.objects.create(user)
        return Response({"user":UserSerializer(user,context=self.get_serializer_context()).data,
        "token":token})





#user api view

class UserAPI(generics.RetrieveAPIView):
    permission_classes=[
        permissions.IsAuthenticated
    ]        
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user
