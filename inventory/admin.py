from django.contrib import admin

from .models import (
    Category,
    Owner,
    Departament,
    Inventory
)

# Register your models here.
admin.site.register(Category)
admin.site.register(Owner)
admin.site.register(Departament)
admin.site.register(Inventory)
