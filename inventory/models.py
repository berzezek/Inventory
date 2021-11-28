import datetime

from django.db import models


class Category(models.Model):
    category_title = models.CharField('Category', max_length=32)
    category_description = models.TextField('Description', null=True, blank=True)

    def __str__(self):
        return self.category_title


class Departament(models.Model):
    departament_title = models.CharField('Department', max_length=32)
    departament_description = models.TextField('Description', null=True, blank=True)

    def __str__(self):
        return self.departament_title


class Owner(models.Model):
    name = models.CharField('Name', max_length=32)
    surname = models.CharField('Surname', max_length=32)
    owner_description = models.TextField('Description', null=True, blank=True)
    departament = models.ForeignKey(Departament, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f'{self.name} - {self.surname[0]}'


class Inventory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField('Title', max_length=128)
    inventory_description = models.TextField('Description', null=True, blank=True)
    owner = models.ForeignKey(Owner, on_delete=models.SET_NULL, null=True, blank=True)
    serial_number = models.CharField('S/N', max_length=128)
    price = models.IntegerField('Price')
    date_purchase = models.DateField('Date of purchase', null=True, blank=True)
    date_update = models.DateField('Update', default=datetime.date.today, null=True, blank=True)

    def __str__(self):
        return self.title
