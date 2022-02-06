from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('inventory.urls')),
    path('api/v1/', include('inventory.api.urls')),
    path('api/auth/', include('auths.api.urls')),
]
