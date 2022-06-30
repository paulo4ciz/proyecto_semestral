from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def register(request):
    return render(request, 'core/register.html')

def about(request):
    return render(request, 'core/about.html')

def galeria(request):
    return render(request, 'core/galeria.html')

def login(request):
    return render(request, 'core/login.html')

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