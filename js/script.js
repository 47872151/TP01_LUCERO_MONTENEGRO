// Validación en tiempo real para los campos del formulario de login
document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('contraseña').addEventListener('input', validarContraseña);
document.getElementById('confirmarContraseña').addEventListener('input', validarConfirmarContraseña);

function validarNombre() {
    let nombre = document.getElementById('nombre').value;
    let nombreValido = nombre.length >= 3;

    document.getElementById('nombre').style.backgroundColor = nombreValido ? "#D6E5BD" : "#ff686b";
}

function validarEmail() {
    let email = document.getElementById('email').value;
    const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(email);

    document.getElementById('email').style.backgroundColor = mailValido ? "#D6E5BD" : "#ff686b";
}

function validarContraseña() {
    let contraseña = document.getElementById('contraseña').value;
    const tieneNum = /(?:\d)/.test(contraseña);
    const tieneLetra = /(?:[A-Z])/.test(contraseña) || /(?:[a-z])/.test(contraseña);
    let contraseñaValida = contraseña.length >= 8 && tieneNum && tieneLetra;

    document.getElementById('contraseña').style.backgroundColor = contraseñaValida ? "#D6E5BD" : "#ff686b";
    validarConfirmarContraseña();  // Validar confirmación de la contraseña también en tiempo real
}

function validarConfirmarContraseña() {
    let contraseña = document.getElementById('contraseña').value;
    let confirmarContraseña = document.getElementById('confirmarContraseña').value;
    let contraseñasCoinciden = contraseña === confirmarContraseña;

    document.getElementById('confirmarContraseña').style.backgroundColor = contraseñasCoinciden ? "#D6E5BD" : "#ff686b";
}

// Validar el formulario al enviar
function validarForm() {
    const alertaVerde = document.getElementById("alertaVerde");
    const alertaRojo = document.getElementById("alertaRojo");

    // Validar nombre
    let nombre = document.getElementById('nombre').value;
    let nombreValido = nombre.length >= 3;

    // Validar email
    let email = document.getElementById('email').value;
    const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(email);

    // Validar contraseña
    let contraseña = document.getElementById('contraseña').value;
    let confirmarContraseña = document.getElementById('confirmarContraseña').value;
    const tieneNum = /(?:\d)/.test(contraseña);
    const tieneLetra = /(?:[A-Z])/.test(contraseña) || /(?:[a-z])/.test(contraseña);
    let contraseñaValida = contraseña.length >= 8 && tieneNum && tieneLetra && (contraseña === confirmarContraseña);

    let mensaje = "";

    // Limpiar alertas antes de validar
    alertaRojo.style.display = "none";
    alertaVerde.style.display = "none";

    // Comprobar validaciones
    if (!nombreValido) {
        mensaje = 'El nombre debe contener al menos tres caracteres';
        alertaRojo.innerHTML = mensaje;
        alertaRojo.style.display = "block";
        return false;
    }
    if (!mailValido) {
        mensaje = 'Introduzca un mail válido por favor';
        alertaRojo.innerHTML = mensaje;
        alertaRojo.style.display = "block";
        return false;
    }
    if (!contraseñaValida) {
        mensaje = 'Las contraseñas deben ser iguales, contener al menos una letra y un número, y tener al menos 8 caracteres.';
        alertaRojo.innerHTML = mensaje;
        alertaRojo.style.display = "block";
        return false;
    }

    // Si todo es válido
    mensaje = 'Formulario enviado correctamente.';
    alertaVerde.innerHTML = mensaje;
    alertaVerde.style.display = "block";

    setTimeout(function() {
        document.getElementById('registrarseForm').submit();
    }, 5000);

    return false;
}

// Mostrar/ocultar contraseñas
document.getElementById('togglePassword1').addEventListener('click', function() {
    var contraseñaField = document.getElementById('contraseña');
    var type = contraseñaField.type === 'password' ? 'text' : 'password';
    contraseñaField.type = type;
});

document.getElementById('togglePassword2').addEventListener('click', function() {
    var confirmarContraseñaField = document.getElementById('confirmarContraseña');
    var type = confirmarContraseñaField.type === 'password' ? 'text' : 'password';
    confirmarContraseñaField.type = type;
});
