from django.urls import path
from .views import home, register, about, galeria, img1, img2, img3, img4, img5, img6, agregar_producto, listar_productos, modificar_producto, eliminar_producto

urlpatterns = [
    path('', home, name="home"),
    path('register/' ,register, name="register"),
    path('about/' ,about , name="about"),
    path('galeria/' ,galeria , name="galeria"),
    path('img1/', img1 ,name="img1"),
    path('img2/',img2 ,name="img2"),
    path('img3/', img3, name="img3"),
    path('img4/', img4, name="img4"),
    path('img5/', img5, name="img5"),
    path('img6/', img6, name="img6"),
    path('agregar-producto/', agregar_producto, name="agregar_producto"),
    path('listar-productos/', listar_productos, name="listar_productos"),
    path('modificar-producto/<id>/', modificar_producto, name="modificar_producto"),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
]