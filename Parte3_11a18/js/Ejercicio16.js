// 1. Funciones flecha para las operaciones básicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
// Función de división con validación para evitar división por cero
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// 2. Función principal que coordina el flujo
function calcularOperacion(operacion) {
    // Obtener los valores de los campos de entrada
    let input1 = document.getElementById("numero1").value.trim();
    let input2 = document.getElementById("numero2").value.trim();

    // Validación 1: Verificar que los campos no estén vacíos
    if (input1 === "" || input2 === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, ingresa valores en ambos campos."
        });
        return;
    }

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    // Validación 2: Verificar que los valores ingresados sean números
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: "error",
            title: "Valor inválido",
            text: "Por favor, asegúrate de ingresar únicamente números."
        });
        return;
    }

    let resultado;

    // Llamar a la función flecha correspondiente según el botón presionado
    switch (operacion) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(num1, num2);
            break;
        case 'division':
            resultado = dividir(num1, num2);
            break;
    }

    // Validación 3: Manejar el error específico de la división por cero
    if (resultado === 'Error: División por cero') {
        Swal.fire({
            icon: "warning",
            title: "Operación no permitida",
            text: resultado
        });
        document.getElementById("resultado").value = ""; // Limpiar el campo de resultado
    } else {
        // Mostrar el resultado en la caja de texto readonly
        document.getElementById("resultado").value = resultado;
    }
}