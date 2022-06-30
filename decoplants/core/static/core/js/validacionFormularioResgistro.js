const formulario = document.getElementById('formulario'); // accedemos a clase formulario
const inputs = document.querySelectorAll('#formulario input'); //arreglo que almacena todos los inputs de nuestro formulario


//objeto con expresiones contiene propiedades para cada form, permite restricciones
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// de entrada todos los campos son false para no enviar el formnulario si estos no son true, segun nuestras validaciones
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false

}

//comprobamos cuando el usuario escriba y de un click afuera
//foreach recorremos el arreglo, ada uno de los inputs
//parametro 'input' para identificar
//por cada input agregamos unevent listener, 
//comprobamos con un keyup (al levantar la tecla se ejecuta el codigo validar formulario)
// blur es para cuando hace click afuera del input.
// target.name identificamos el nombre del formulario
//
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;

        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2(); // al poner esta funcion de password2 acá estaremos validando  la segunda contraseña al mismo que tiempo que validamos la primera.
            break;

        case "password2":
            validarPassword2();
            break;

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;

        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;

    }
};


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {

        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        campos[campo] = true; // cambiamos a true para enviar en formulario

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        campos[campo] = false; // false para que no se pueda enviar
    }
};

conts = validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});





//addevenlistener de tipo submit, significa cuando el usuario presione el btn tipo submit, 
//ejecutará la funcion tipo flecha, validaremos los campos con el parametro e (evento)
//prevent default, no enviará nada si no esta correcto.

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    // validaremos todos los campos para enviar el submit
    if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
        formulario.reset(); // reseteo al momento de enviar el formulario siemore y cuando todos sean true
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000); // sacamos el mensaje de enviado
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{   //icono identificador
            icono.classList.remove('formulario__grupo-correcto'); // removimos los iconos check despues de enviar.
        });
    } else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});