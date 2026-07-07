// CLOSURE: manejarTareas encapsula la lógica de agregar y eliminar tareas.
// Las variables y funciones dentro de este bloque tienen SCOPE LOCAL y están protegidas.
const manejarTareas = (function() {
    
    // Función para recuperar las tareas del Local Storage usando JSON.parse()
    function obtenerTareas() {
        let tareasJSON = localStorage.getItem("tareas");
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    }

    // Función privada para guardar el arreglo en el Local Storage usando JSON.stringify()
    function guardarTareas(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Retornamos un objeto con los métodos públicos que tendrán acceso al entorno protegido (Closure)
    return {
        obtener: function() {
            return obtenerTareas();
        },
        
        agregarTarea: function(tareaTexto) {
            let tareas = obtenerTareas();
            // Agregamos un objeto JSON que representa la tarea
            tareas.push({ tarea: tareaTexto, completada: false });
            guardarTareas(tareas);
        },
        
        eliminarTarea: function(indice, callbackExito) {
            // Confirmación usando SweetAlert2
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Se eliminará esta tarea permanentemente.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    let tareas = obtenerTareas();
                    tareas.splice(indice, 1); // Eliminamos la tarea del arreglo
                    guardarTareas(tareas); // Actualizamos el Local Storage
                    
                    Swal.fire(
                        '¡Eliminada!',
                        'Tu tarea ha sido eliminada.',
                        'success'
                    );
                    
                    // Llamamos a la función para volver a dibujar la lista
                    if(callbackExito) callbackExito();
                }
            });
        }
    };
})(); // Los paréntesis finales ejecutan la función inmediatamente (IIFE)

// SCOPE GLOBAL: Función para mostrar las tareas en la página web
function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; // Limpiamos la lista visualmente
    
    // Obtenemos las tareas a través del closure
    let tareas = manejarTareas.obtener();

    tareas.forEach((item, indice) => {
        let li = document.createElement("li");
        li.textContent = item.tarea;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        
        // Al hacer clic, llamamos a la función encapsulada para eliminar
        btnEliminar.onclick = function() {
            manejarTareas.eliminarTarea(indice, renderizarTareas);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Evento para el botón de Agregar Tarea
document.getElementById("btnAgregar").addEventListener("click", function() {
    let inputTarea = document.getElementById("nuevaTarea");
    let texto = inputTarea.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Por favor, escribe una tarea antes de agregarla."
        });
        return;
    }

    // Agregamos la tarea a través del closure
    manejarTareas.agregarTarea(texto);
    inputTarea.value = ""; // Limpiamos el input
    renderizarTareas(); // Actualizamos la vista
});

// Cargar las tareas desde el Local Storage al recargar la página
document.addEventListener("DOMContentLoaded", renderizarTareas);