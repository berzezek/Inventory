from rest_framework.serializers import ModelSerializer

from ..models import (
    Category,
    Owner,
    Departament,
    Inventory,
)


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Departament
        fields = '__all__'


class OwnerSerializer(ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'


class OwnerListSerializer(ModelSerializer):

    departament = DepartmentSerializer()

    class Meta:
        model = Owner
        fields = '__all__'


class InventorySerializer(ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'


class InventoryListSerializer(ModelSerializer):

    owner = OwnerSerializer()
    category = CategorySerializer()

    class Meta:
        model = Inventory
        fields = '__all__'
