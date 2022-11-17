from rest_framework import viewsets
from rest_framework import permissions, authentication
from .serializers import FundsSerializer, UserSerializer
from .models import  User, Funds


class UserViewSet(viewsets.ModelViewSet):
      queryset = User.objects.all()
      serializer_class = UserSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#     # authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]

class FundsViewSet(viewsets.ModelViewSet):
      queryset = Funds.objects.all()
      serializer_class = FundsSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#     # authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]


