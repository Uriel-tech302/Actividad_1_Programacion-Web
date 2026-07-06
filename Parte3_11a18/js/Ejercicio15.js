let estudiantes = [];

function agregarEstudiante() {
    let nombreInput = document.getElementById("nombre").value.trim();
    let calificacionInput = document.getElementById("calificacion").value.trim();

    if (nombreInput === "" || calificacionInput === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    let calificacion = parseFloat(calificacionInput);
    if (isNaN(calificacion)) {
        alert("Por favor, ingresa una calificación numérica válida.");
        return;
    }

    let estudiante = {
        nombre: nombreInput,
        calificacion: calificacion
    };
    
    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    
    document.getElementById("contador").innerText = "Estudiantes agregados: " + estudiantes.length;
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes para calcular. Agrega al menos uno.");
        return;
    }

    let sumaTotal = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = sumaTotal / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("estudianteAlto").value = estudianteMayor.nombre;
    document.getElementById("estudianteBajo").value = estudianteMenor.nombre;
}