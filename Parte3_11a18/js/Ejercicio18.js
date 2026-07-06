"use strict";

// Selección de elementos del DOM
const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
const mensajeAlerta = document.getElementById("mensajeAlerta");
const mensajeVacio = document.getElementById("mensajeVacio");
const contador = document.getElementById("contador");

let totalElementos = 0;

// Función para actualizar el contador y el mensaje vacío
function actualizarEstadoLista() {
    totalElementos = lista.children.length;
    contador.textContent = `Total: ${totalElementos}`;

    if (totalElementos === 0) {
        mensajeVacio.classList.remove("d-none");
    } else {
        mensajeVacio.classList.add("d-none");
    }
}

// Función para mostrar alerta
function mostrarAlerta() {
    mensajeAlerta.classList.remove("d-none");

    setTimeout(function() {
        mensajeAlerta.classList.add("d-none");
    }, 2500);
}

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const texto = input.value.trim();

    if (texto === "") {
        mostrarAlerta();
        return;
    }

    // Crear elemento li
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "animacion-entrada"
    );

    // Crear span para el texto
    const spanTexto = document.createElement("span");
    spanTexto.classList.add("elemento-texto");
    spanTexto.textContent = texto;

    // Crear botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "btn-eliminar");

    // Evento para eliminar el elemento
    botonEliminar.addEventListener("click", function() {
        li.remove();
        actualizarEstadoLista();
    });

    // Agregar elementos al li
    li.appendChild(spanTexto);
    li.appendChild(botonEliminar);

    // Agregar li a la lista
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
    input.focus();

    actualizarEstadoLista();
}

// Evento del botón agregar
botonAgregar.addEventListener("click", agregarElemento);

// Permitir agregar con tecla Enter
input.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        agregarElemento();
    }
});

// Estado inicial
actualizarEstadoLista();