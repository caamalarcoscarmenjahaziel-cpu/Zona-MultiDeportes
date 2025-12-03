// Esperamos a que todo el HTML se haya cargado antes de ejecutar el código JS
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtenemos referencias a los elementos del DOM (HTML)
    const form = document.getElementById('formularioRegistro');
    const mensajeDiv = document.getElementById('mensaje');
    const nombreInput = document.getElementById('nombreUsuario');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');

    // 2. Agregamos un "escuchador" de eventos al formulario para detectar el envío
    form.addEventListener('submit', function(event) {
        // Prevenimos el comportamiento por defecto de HTML de recargar la página
        event.preventDefault(); 
        
        // Limpiamos mensajes anteriores
        limpiarMensaje();

        // 3. Ejecutamos la validación
        if (validarFormulario()) {
            // Si la validación es exitosa, simulamos el registro
            mostrarMensaje('Registro exitoso. ¡Bienvenido a nuestra comunidad!', 'exito');
            // Aquí iría el código real para enviar los datos a un servidor
            form.reset(); // Limpiamos el formulario después de un registro exitoso
        }
    });

    // 4. Función de Validación Principal
    function validarFormulario() {
        let esValido = true;
        
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contrasena = contrasenaInput.value.trim();
        
        // --- Validación de Nombre de Usuario ---
        if (nombre === '') {
            mostrarMensaje('El Nombre de Usuario es obligatorio.', 'error');
            esValido = false;
        }

        // --- Validación de Correo Electrónico ---
        // Expresión regular simple para verificar formato de email (algo@algo.algo)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correo === '' || !emailRegex.test(correo)) {
            mostrarMensaje('Por favor, ingresa un Correo Electrónico válido.', 'error');
            esValido = false;
        }

        // --- Validación de Contraseña ---
        const MIN_LONGITUD_PASS = 6;
        if (contrasena.length < MIN_LONGITUD_PASS) {
            mostrarMensaje('La Contraseña debe tener al menos 6 caracteres., error');
            esValido = false;
        }

        return esValido;
    }

    // 5. Función para mostrar mensajes de estado
    function mostrarMensaje(texto, tipo) {
        mensajeDiv.textContent = texto;
        mensajeDiv.className = 'mensaje ${tipo}'; // Asigna las clases 'mensaje' y 'exito' o 'error'
        mensajeDiv.style.display = 'block'; // Muestra el div
    }

    // 6. Función para limpiar mensajes
    function limpiarMensaje() {
        mensajeDiv.textContent = '';
        mensajeDiv.className = 'mensaje';
        mensajeDiv.style.display = 'none';
    }
});