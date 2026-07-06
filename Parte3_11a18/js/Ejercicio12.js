// Seleccionamos los elementos del DOM una sola vez
const inputKilometros = document.getElementById('kilometros');
const inputMillas = document.getElementById('millas');
const errorMsg = document.getElementById('error-msg');
const btnConvertir = document.getElementById('btn-convertir');

// Función principal que realiza la conversión
function realizarConversion() {
    const valorIngresado = inputKilometros.value.trim();

    // Reiniciamos los mensajes y resultados anteriores
    errorMsg.style.display = 'none';
    inputMillas.value = '';

    // Validación 1: Campo vacío
    if (valorIngresado === '') {
        errorMsg.textContent = 'Por favor, ingresa un valor para convertir.';
        errorMsg.style.display = 'block';
        return;
    }

    // Validación 2: Que sea un número válido y que no sea negativo
    if (isNaN(valorIngresado) || parseFloat(valorIngresado) < 0) {
        errorMsg.textContent = 'Por favor, ingresa un número positivo válido.';
        errorMsg.style.display = 'block';
        return;
    }

    // Lógica matemática
    const kilometros = parseFloat(valorIngresado);
    const factorConversion = 0.621371;
    const millas = kilometros * factorConversion;

    // Mostramos el resultado limitando a 4 decimales para que se vea limpio
    inputMillas.value = millas.toFixed(4);
}

// Escuchamos el clic en el botón
btnConvertir.addEventListener('click', realizarConversion);

// Escuchamos si el usuario presiona la tecla "Enter" en el input
inputKilometros.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        realizarConversion();
    }
});