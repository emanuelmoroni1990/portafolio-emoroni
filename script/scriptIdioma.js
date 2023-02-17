// Links de interés.
// https://plainenglish.io/blog/passing-arguments-to-event-listeners-in-javascript-1a81bc397ecb

// Barra de navegacion
var estudiosRef = document.getElementById("estudiosId");
var proyectosRef = document.getElementById("proyectosId");
var idiomaRef = document.getElementById("idiomaId");

// Botones de seleccion
var espanolRef = document.getElementById("selectorEspanolId");
var inglesRef = document.getElementById("selectorInglesId");

// Párrafos
var parrafoPresentacionRef = document.getElementById("parrafoPresentacionId");
var parrafoUnoRef = document.getElementById("parrafoUnoId");
var parrafoDosRef = document.getElementById("parrafoDosId");
var parrafoTresRef = document.getElementById("parrafoTresId");
var parrafoCuatroRef = document.getElementById("parrafoCuatroId");
var parrafoCincoRef = document.getElementById("parrafoCincoId");

// Tarjeta estudios
var tarjetaEstudiosRef = document.getElementById("cardEstudiosId");

// En caso de que la variable local no exista, la creo y guardo el valor Ingles.
if(window.localStorage.getItem("banderaIdioma") == null){
    window.localStorage.setItem("banderaIdioma", "Ingles");
}

// Esta bandera la seteo para que la primera vez que se ingrese a la landing page no se ejecute el placeholder.
window.localStorage.setItem("banderaPrimeraVez", "true");

// Cuando el DOM se carga, evaluo la bandera y en base a eso es el idioma en el cual cargo el contenido.
window.addEventListener('DOMContentLoaded', () => {changeLanguage(window.localStorage.getItem("banderaIdioma"))}, false);

// Cargo los dos eventlistener en los botones para cambiar el idioma.
espanolRef.addEventListener("click", () => {changeLanguage("Espanol")}, false);
inglesRef.addEventListener("click", () => {changeLanguage("Ingles")}, false);

function changeLanguage (language){
    // Descripción en español
    if(language == "Espanol"){
        // Cambio el valor de la bandera de idioma a Espanol.
        window.localStorage.setItem("banderaIdioma", "Espanol");

        // Cambio el estilo de los botones de idioma segun la opcion seleccionada.
        espanolRef.innerHTML = "Español";
        inglesRef.innerHTML = "Inglés";
        espanolRef.setAttribute("class", "dropdown-item active dropdown-item__personal");
        inglesRef.setAttribute("class", "dropdown-item");

        // Cambio el contenido de la barra de navegacion para que la misma se encuentre en espanol.
        estudiosRef.innerHTML = "Estudios";
        proyectosRef.innerHTML = "Proyectos Realizados";
        idiomaRef.innerHTML = "Idioma";

        // Almaceno el contenido de la bandera en la variable primeraVez para evaluar la decision por tomar.
        var primeraVez = window.localStorage.getItem("banderaPrimeraVez");

        // spanishFill();
        if(primeraVez == "true"){
            spanishFill();
            window.localStorage.setItem("banderaPrimeraVez", "false");
        }
        else{
            placeHolderFill();
            setTimeout(spanishFill, 1000);
        }
    }
    // Descripción en inglés
    else if (language == "Ingles"){
        // Cambio el valor de la bandera de idioma a Ingles
        window.localStorage.setItem("banderaIdioma", "Ingles");

        // Cambio el estilo de los botones de idioma segun la opcion seleccionada
        inglesRef.innerHTML = "English";
        espanolRef.innerHTML = "Spanish";
        inglesRef.setAttribute("class", "dropdown-item active dropdown-item__personal");
        espanolRef.setAttribute("class", "dropdown-item");

        // Cambio el contenido de la barra de navegacion para que la misma se encuentre en ingles
        estudiosRef.innerHTML = "Education";
        proyectosRef.innerHTML = "Developed Projects"
        idiomaRef.innerHTML = "Language";

        // Almaceno el contenido de la bandera en la variable primeraVez para evaluar la decision por tomar.
        var primeraVez = window.localStorage.getItem("banderaPrimeraVez");

        // englishFill();
        if(primeraVez == "true"){
            englishFill();
            window.localStorage.setItem("banderaPrimeraVez", "false");
        }
        else{
            placeHolderFill();
            setTimeout(englishFill, 1000);
        }
    }
}

function spanishFill (){
    parrafoPresentacionRef.setAttribute("class", "presentacion-personal col-lg-6 col-md-6");

    parrafoPresentacionRef.innerHTML = `
        <p id="parrafoUnoId" class="parrafo">¡Hola a todos! Mi nombre es Emanuel Moroni y deseo compartir en este breve sitio web un poco sobre mis conocimientos y habilidades.</p>
        <p id="parrafoDosId"class="parrafo">En el año 2008 comencé la carrera de ingeniería en electrónica en la Universidad Tecnológica Nacional Facultad Regional Buenos Aires (UTN - FRBA), ubicada en la ciudad de Buenos Aires, Argentina.</p>
        <p id="parrafoTresId" class="parrafo">Durante toda la carrera aprendí mucho sobre electrónica y programación, específicamente programación de sistemas embebidos. Para esto utilice los lenguajes de C y C++, pero apoyándome siempre sobre otros que fueron necesarios.</p>
        <p id="parrafoCuatroId" class="parrafo">En los últimos 5 años estuve trabajando como profesor en la Escuela Técnica Roberto Rocca, enseñando sobre electrónica y programación. Empleando plataformas como Arduino y NodeMCU, pudimos desarrollar, junto con los estudiantes, numerosos proyectos que vinculaban los sistemas embebidos, con el desarrollo web y la gestión de bases de datos.</p>
        <p id="parrafoCincoId" class="parrafo">Los invito a recorrer este espacio para conocer un poco más de mi y mi trabajo. Siéntase en la profunda libertad de consultar, mencionar o criticar para mejoras.</p>
    `;
}

function englishFill (){
    // Parrafos de presentacion personal
    parrafoPresentacionRef.setAttribute("class", "presentacion-personal col-lg-6 col-md-6");

    parrafoPresentacionRef.innerHTML = `
        <p id="parrafoUnoId" class="parrafo">¡Hello everyone! My name is Emanuel Moroni and I want to share with you, on this brief web syte, a little bit about me, my knowledge and habilities.</p>
        <p id="parrafoDosId"class="parrafo">In 2008 I began electronic engineering carreer at the National Technological University Buenos Aires Regional Faculty (UTN - FRBA), located in Buenos Aires city, Argentina.</p>
        <p id="parrafoTresId" class="parrafo">During all the carrer I learnt a lot of electronics and programming, specially about embedded systems programming. For the last mentioned I used C and C++ languages, but always supporting with others ones that were neccesary.</p>
        <p id="parrafoCuatroId" class="parrafo">In the last 5 years I've working as teacher at Roberto Rocca Technical School, teaching about electronics and programming. Using platforms such Arduino and NodeMCU, we could develop, with the students, a lot of projects that link up embedded systems, web development and databases management.</p>
        <p id="parrafoCincoId" class="parrafo">I invite you to travel through this space to know a little bit about me and my job. Feel in the freedom to ask, mention or criticize for improvements.</p>
    `;

    // Tarjetas de estudios
    tarjetaEstudiosRef.setAttribute("class", "card-body");

    tarjetaEstudiosRef.innerHTML = `
        <h5 class="card-title card-title__personal">Electronic Engineering</h5>
        <p class="card-text">In 2008 I started my degree in electronic engineering at the National Technological University, Buenos Aires Regional Faculty. Throughout the degree I learnt a lot about electronics and programming oriented to embedded systems. I currently have two finals left to finish.</p>
        <p class="card-text"><small class="text-muted">Last update: 02/2023</small></p>
    `;
}

function placeHolderFill (){
    parrafoPresentacionRef.setAttribute("class", "presentacion-personal col-lg-6 col-md-6 placeholder-glow");

    parrafoPresentacionRef.innerHTML = `
        <span class="placeholder col-6"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-6"></span>
    `;
}