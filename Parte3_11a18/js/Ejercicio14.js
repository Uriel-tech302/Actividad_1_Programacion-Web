document.getElementById('btnCalcular').addEventListener('click', function() {
    
    // Capturamos el valor ingresado en el campo de texto
    const inputValor = document.getElementById('numerosInput').value.trim();

    // 1. Validación: Verificar que el campo no esté vacío
    if (inputValor === '') {
        alert("El campo está vacío. Por favor, ingresa números separados por comas.");
        return;
    }

    // Convertimos la cadena de texto en un arreglo separando por comas
    // y aplicamos map(Number) para convertir cada elemento a un número
    const arregloCadenas = inputValor.split(",");
    const numeros = arregloCadenas.map(Number);

    // 2. Validación: Verificar que todos los valores ingresados sean números válidos
    // isNaN evalúa si alguno de los elementos NO es un número
    const contieneInvalidos = numeros.some(isNaN);
    if (contieneInvalidos) {
        alert("Ingresaste valores inválidos. Asegúrate de escribir solo números separados por comas.");
        return;
    }

    // 3. Calcular el número mayor utilizando Math.max y el spread operator (...)
    const numeroMayor = Math.max(...numeros);

    // 4. Calcular el número menor utilizando Math.min y el spread operator (...)
    const numeroMenor = Math.min(...numeros);

    // 5. Calcular el promedio utilizando reduce()
    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numeros.length;

    // 6. Mostrar los resultados en las cajas de texto correspondientes (readonly)
    document.getElementById('numeroMayor').value = numeroMayor;
    document.getElementById('numeroMenor').value = numeroMenor;
    
    // Mostramos el promedio (con toFixed para limitar a 2 decimales si es necesario)
    document.getElementById('promedio').value = promedio.toFixed(2);
});