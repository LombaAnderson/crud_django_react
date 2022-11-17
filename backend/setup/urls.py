from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from crudbackend.views import UserViewSet, GroupViewSet
from userlist.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
