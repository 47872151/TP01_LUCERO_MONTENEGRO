function validarForm() {
    const alertaVerde = document.getElementById("alertaVerde");
    const alertaRojo = document.getElementById("alertaRojo");

    // Validar nombre
    let nombre = document.getElementById('nombre').value;
    let nombreValido = false;
    if (nombre.length >= 3) {
        nombreValido = true;
    }

    // Validar email
    let email = document.getElementById('email').value;
    const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(email);

    // Validar contraseña
    let contraseña = document.getElementById('contraseña').value;
    let confirmarContraseña = document.getElementById('confirmarContraseña').value;
    let contraseñaValida = false;

    const tieneNum = /(?:\d)/.test(contraseña);
    const tieneLetra = /(?:[A-Z])/.test(contraseña) || /(?:[a-z])/.test(contraseña);
    if (contraseña.length >= 8 && tieneNum && tieneLetra && (contraseña === confirmarContraseña)) {
        contraseñaValida = true;
    }

    let mensaje = "";
    let mensaje2 = "";

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
    mensaje2 = 'Formulario enviado correctamente.';
    alertaVerde.innerHTML = mensaje2;
    alertaVerde.style.display = "block";

    setTimeout(function() {
        document.getElementById('registrarseForm').submit();
    }, 5000);

    return false;
}
