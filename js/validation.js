let tabla = [
    { nombre: "Roland", edad: 39 },
    { nombre: "Lilith", edad: 38 },
    { nombre: "Mordecai", edad: 38 },
    { nombre: "Brick", edad: 42 }
];

window.onload = cargarEventos;

function cargarEventos() {
    console.log("cargarEventos")
    document.getElementById("mostrar-personajes").addEventListener("click", mostrarPersonajes);
    document.getElementById("nuevo-personaje").addEventListener("submit", nuevoPersonaje);
    let Validate = document.getElementById("form-confimed");
    Validate.addEventListener("click", Validate);
}

function validateAndAdd(event) {

    let nombre = formD["nombre"].value;
    let edad = formD["edad"].value;

    if (isValidate) nuevoPersonaje(event);


    let isValidate = false;

    if (!nombre || nombre == "") {
        event.preventDefault();
        document.getElementById("error-nombre").style.display = "block";
        console.log("*error: introduzca un nombre*")
        isValidate = true;
    } else {
        document.getElementById("error-nombre").style.display = "none";
    }

    if (!edad || edad == "") {
        event.preventDefault();
        document.getElementById("error-edad").style.display = "block";
        console.log("*error: introduzca edad*")
        isValidate = true;
    } else {
        document.getElementById("error-edad").style.display = "none";
    }

    return isValidate;
}

function mostrarPersonajes() {
    let cuerpoTabla = document.getElementById("personajes-tabla");
    let todaTabla = "";

    for (let i = 0; i < tabla.length; i++) {
        todaTabla += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + `</td><td><button onclick="eliminarPersonaje(${i})">Eliminar</button></td></tr> `;
    }
    cuerpoTabla.innerHTML = todaTabla;
}

function nuevoPersonaje(event) {
    event.preventDefault();

    let nombreIntroducido = document.getElementById("nombre").value;
    let edadIntoducido = document.getElementById("edad").value;

    let nuevoPersonaje = { nombre: nombreIntroducido, edad: edadIntoducido };
    tabla.push(nuevoPersonaje);

    mostrarPersonajes();
}

function eliminarPersonaje(i) {
    tabla.splice(i, 1);

    mostrarPersonajes();
}
