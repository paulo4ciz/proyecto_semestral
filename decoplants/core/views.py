import re
from django.shortcuts import render, redirect, get_object_or_404
from core.models import Producto
from .forms import ProductoForm

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def register(request):
    return render(request, 'core/register.html')

def about(request):
    return render(request, 'core/about.html')

def galeria(request):
    return render(request, 'core/galeria.html')

def img1(request):
    return render(request, 'core/img1.html')

def img2(request):
    return render(request, 'core/img2.html')

def img3(request):
    return render(request, 'core/img3.html')

def img4(request):
    return render(request, 'core/img4.html')

def img5(request):
    return render(request, 'core/img5.html')

def img6(request):
    return render(request, 'core/img6.html')

def agregar_producto(request):
    data= {
        'form': ProductoForm()
    }
    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "guardado correctamente"
        else:
            data["form"] = formulario
    return render(request, 'core/producto/agregar.html', data)


def listar_productos(request):
    productos = Producto.objects.all()
    data={
        'productos': productos
    }
    return render(request, 'core/producto/listar.html', data)

def modificar_producto(request, id):

    producto =get_object_or_404(Producto, id=id)

    data={
        'form': ProductoForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            return redirect(to="listar_productos")
        data["form"] = formulario

    return render(request, 'core/producto/modificar.html', data)

def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    return redirect(to='listar_productos')
