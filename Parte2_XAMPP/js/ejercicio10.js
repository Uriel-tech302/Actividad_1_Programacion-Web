function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;
    let resultado = document.getElementById("fahrenheit");
    let mensaje = document.getElementById("mensaje");

    if (celsius === "") {
        mensaje.textContent = "Por favor, ingresa un valor en grados Celsius.";
        resultado.value = "";
        return;
    }

    if (isNaN(celsius)) {
        mensaje.textContent = "El valor ingresado debe ser numérico.";
        resultado.value = "";
        return;
    }

    let c = parseFloat(celsius);
    let fahrenheit = (c * 9 / 5) + 32;

    resultado.value = fahrenheit.toFixed(2) + " °F";
    mensaje.textContent = "";
}