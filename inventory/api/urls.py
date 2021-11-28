from rest_framework import routers

from .views import (
    CategoryViewSet,
    OwnerViewSet,
    DepartamentViewSet,
    InventoryViewSet,
)

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('owner', OwnerViewSet, basename='owner')
router.register('departament', DepartamentViewSet, basename='departament')
router.register('inventory', InventoryViewSet, basename='inventory')

urlpatterns = [
]

urlpatterns += router.urls
