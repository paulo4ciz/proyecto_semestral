from django.db import models

# Create your models here.

class Marca(models.Model):  #creamos tabla marca con su respectivo nombre
    nombre = models.CharField(max_length=50)

class Producto(models.Model):  #creamos tabla producto con sus respectivos atributos
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    descripcion = models.TextField()
    nuevo