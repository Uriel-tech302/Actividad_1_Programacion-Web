// Seleccionamos el botón y le agregamos el evento de clic
document.getElementById('btnVerificar').addEventListener('click', function() {
    
    // Capturar el valor ingresado en el campo de texto
    const inputEdad = document.getElementById('edad').value.trim();
    const cajaResultado = document.getElementById('resultado');

    // Limpiamos el resultado anterior por si el usuario hace un nuevo cálculo
    cajaResultado.value = '';

    // Validación 1: Verificar que el campo de entrada no esté vacío
    if (inputEdad === '') {
        alert("Por favor, ingresa tu edad.");
        return;
    }

    // Convertimos el texto ingresado a un número
    const edad = Number(inputEdad);

    // Validación 2: Verificar que el valor ingresado sea un número positivo
    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa un número positivo válido.");
        return;
    }

    // Condición de validación: Evaluar si la edad es suficiente para votar
    if (edad >= 18) {
        cajaResultado.value = "Puedes votar";
    } else {
        cajaResultado.value = "No puedes votar";
    }
});