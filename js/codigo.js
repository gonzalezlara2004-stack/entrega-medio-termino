const botonCargar = document.getElementById("botonCargar");
const botonTema = document.getElementById("botonTema");
const cuerpo = document.querySelector("body");

function cargarExposiciones() {

    fetch('js/datos.json')
    .then(res => res.json())
    .then(datos => {

        let contenedor = document.getElementById("contenedor");
        let htmlAcumulado = "";

        datos.forEach(item => {

            htmlAcumulado += `<div class="card">`;
            htmlAcumulado += `<h3>${item.titulo}</h3>`;
            htmlAcumulado += `<p>${item.anio}</p>`;
            htmlAcumulado += `<p>${item.tema}</p>`;
            htmlAcumulado += `<p>${item.descripcion}</p>`;
            htmlAcumulado += `</div>`;

        });

        contenedor.innerHTML = htmlAcumulado;

    });
}

botonCargar.addEventListener("click", cargarExposiciones);

function cambiarTema() {
    cuerpo.classList.toggle("dark");
}

botonTema.addEventListener("click", cambiarTema);

