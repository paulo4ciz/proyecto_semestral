from django.contrib import admin
from .models import Raza, Producto #importamos nuestros modelos
# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombre","precio", "indoor", "raza", "fecha_plantacion"]
    list_editable =["precio"]
    search_fields = ["nombre"]
    list_filter = ["raza", "precio"]

admin.site.register(Raza) #registro Marca
admin.site.register(Producto, ProductoAdmin) #registro Producto