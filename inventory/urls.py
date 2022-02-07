from django.urls import path
from django.conf.urls import url

from .views import (
    index,
    detail,
)

urlpatterns = [
    path('', index),
    # url(r'^', index),
    # url(r'^/(?P<int>[0-9])', detail),

    path('inventory/', index),
    path('inventory_detail/<int:id>/', detail),
    path('inventory_edit/<int:id>/', detail),
    path('inventory_add/', index),

    path('category/', index),
    path('category_detail/<int:id>/', detail),
    path('category_edit/<int:id>/', detail),
    path('category_add/', index),

    path('owner/', index),
    path('owner_detail/<int:id>/', detail),
    path('owner_edit/<int:id>/', detail),
    path('owner_add/', index),

    path('departament/', index),
    path('departament_detail/<int:id>/', detail),
    path('departament_edit/<int:id>/', detail),
    path('departament_add/', index),

    path('login/', index),
]
