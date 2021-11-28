from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

from .serializers import (
    CategorySerializer,
    OwnerSerializer,
    OwnerListSerializer,
    DepartmentSerializer,
    InventorySerializer,
    InventoryListSerializer
)
from ..models import (
    Category,
    Owner,
    Departament,
    Inventory,
)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DepartamentViewSet(ModelViewSet):
    queryset = Departament.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class OwnerViewSet(ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    action_to_serializer = {
        "list": OwnerListSerializer,
        "retrieve": OwnerListSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class InventoryViewSet(ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    action_to_serializer = {
        "list": InventoryListSerializer,
        "retrieve": InventoryListSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
