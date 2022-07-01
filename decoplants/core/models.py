from django.db import models

# Create your models here.

class Raza(models.Model):  #creamos tabla marca con su respectivo nombre
    nombre = models.CharField(max_length=50)

    def __str__(self): #devuelve el campo que mas representa
        return self.nombre 

class Producto(models.Model):  #creamos tabla producto con sus respectivos atributos
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    descripcion = models.TextField()
    indoor = models.BooleanField()
    raza = models.ForeignKey(Raza, on_delete=models.PROTECT) #foreana con el modelo anterior, on delete es solo para elminar una marca, no como cascade que boora todo
    fecha_plantacion = models.DateField()
    imagen = models.ImageField(upload_to="productos", null=True)


    def __str__(self):
        return self.nombre

