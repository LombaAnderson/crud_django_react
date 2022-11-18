from rest_framework import viewsets
from rest_framework import permissions, authentication
from .serializers import  UserSerializer
from .models import  User


class UserViewSet(viewsets.ModelViewSet):
      queryset = User.objects.all()
      serializer_class = UserSerializer
      permission_classes = [permissions.IsAuthenticated]
      authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]


