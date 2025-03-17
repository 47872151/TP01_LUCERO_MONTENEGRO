function validarForm() {
    
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

    // Comprobar validaciones
    if (!nombreValido) {
        alert('El nombre debe contener al menos tres caracteres');
        return false;
    }
    if (!mailValido) {
        alert('Introduzca un mail válido por favor');
        return false;
    }
    if (!contraseñaValida) {
        alert('Las contraseñas deben ser iguales, contener al menos una letra y un número, y tener al menos 8 caracteres.');
        return false;
    }
    
    alert('Formulario enviado correctamente!');
    registrarseForm.submit();
}