document.getElementById("convertir").addEventListener("click", function() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = `${fahrenheit.toFixed(2)} °F`;
});
