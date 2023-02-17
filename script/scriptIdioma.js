// Links de interés.
// https://plainenglish.io/blog/passing-arguments-to-event-listeners-in-javascript-1a81bc397ecb
// https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname

console.log("Consola de pruebas.");
console.log("Location: " + window.location);
console.log("Location: " + window.location.pathname);

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
var tarjetaEstudiosUnoRef = document.getElementById("cardEstudiosUnoId");
var tarjetaEstudiosDosRef = document.getElementById("cardEstudiosDosId");
var tarjetaEstudiosTresRef = document.getElementById("cardEstudiosTresId");

// Tarjetas proyectos
var proyectosUnoRef = document.getElementById("parrafoProyectoUnoId");
var proyectosDosRef = document.getElementById("parrafoProyectoDosId");
var proyectosTresRef = document.getElementById("parrafoProyectoTresId");
var proyectosCuatroRef = document.getElementById("parrafoProyectoCuatroId");
var proyectosCincoRef = document.getElementById("parrafoProyectoCincoId");

// En caso de que la variable local no exista, la creo y guardo el valor Ingles.
if(window.localStorage.getItem("banderaIdioma") == null){
    console.log("Creo la bandera porque es la primera vez.");
    window.localStorage.setItem("banderaIdioma", "Ingles");
}

// Esta bandera la seteo para que la primera vez que se ingrese a la landing page no se ejecute el placeholder.
window.localStorage.setItem("banderaPrimeraVez", "true");

// Obtengo el path donde el usuario se encuentra actualmente.
var paginaActual = window.location.pathname;

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

        spanishFill();
        // if(primeraVez == "true"){
        //     spanishFill();
        //     window.localStorage.setItem("banderaPrimeraVez", "false");
        // }
        // else{
        //     placeHolderFill();
        //     setTimeout(spanishFill, 1000);
        // }
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

        englishFill();
        // if(primeraVez == "true"){
        //     englishFill();
        //     window.localStorage.setItem("banderaPrimeraVez", "false");
        // }
        // else{
        //     placeHolderFill();
        //     setTimeout(englishFill, 1000);
        // }
    }
}

function spanishFill (){

    switch(paginaActual){
        case "/index.html":
            parrafoPresentacionRef.setAttribute("class", "presentacion-personal col-lg-6 col-md-6");

            parrafoPresentacionRef.innerHTML = `
                <p id="parrafoUnoId" class="parrafo">¡Hola a todos! Mi nombre es Emanuel Moroni y deseo compartir en este breve sitio web un poco sobre mis conocimientos y habilidades.</p>
                <p id="parrafoDosId"class="parrafo">En el año 2008 comencé la carrera de ingeniería en electrónica en la Universidad Tecnológica Nacional Facultad Regional Buenos Aires (UTN - FRBA), ubicada en la ciudad de Buenos Aires, Argentina.</p>
                <p id="parrafoTresId" class="parrafo">Durante toda la carrera aprendí mucho sobre electrónica y programación, específicamente programación de sistemas embebidos. Para esto utilice los lenguajes de C y C++, pero apoyándome siempre sobre otros que fueron necesarios.</p>
                <p id="parrafoCuatroId" class="parrafo">En los últimos 5 años estuve trabajando como profesor en la Escuela Técnica Roberto Rocca, enseñando sobre electrónica y programación. Empleando plataformas como Arduino y NodeMCU, pudimos desarrollar, junto con los estudiantes, numerosos proyectos que vinculaban los sistemas embebidos, con el desarrollo web y la gestión de bases de datos.</p>
                <p id="parrafoCincoId" class="parrafo">Los invito a recorrer este espacio para conocer un poco más de mi y mi trabajo. Siéntase en la profunda libertad de consultar, mencionar o criticar para mejoras.</p>
            `;

            break;

        case "/pages/estudios.html":
            // Tarjetas de estudios
            tarjetaEstudiosUnoRef.setAttribute("class", "card-body");

            tarjetaEstudiosUnoRef.innerHTML = `
                <h5 class="card-title card-title__personal">Ingeniería Electrónica</h5>
                <p class="card-text">Comencé en el año 2008 mi carrera de grado en ingeniería en electrónica en la Universidad Tecnológica Nacional, Facultad Regional Buenos Aires. Durante toda la carrera aprendí mucho de electrónica y programación orientada a sistemas embebidos. Actualmente me restan dos finales para terminar.</p>
                <p class="card-text"><small class="text-muted">Última actualización: 02/2023</small></p>
            `;

            tarjetaEstudiosDosRef.setAttribute("class", "card-body");

            tarjetaEstudiosDosRef.innerHTML = `
                <h5 class="card-title card-title__personal">Profesorado Superior</h5>
                <p class="card-text">En el mes de abril del año 2021 comencé el profesorado superior en la Universidad Austral. Esta formación me ayudó a profesionar aún mucho más mi tarea como docente. Finalizaré este profesorado a final del 2023.</p>
                <p class="card-text"><small class="text-muted">Última actualización: 02/2023</small></p>
            `;

            tarjetaEstudiosTresRef.setAttribute("class", "card-body");

            tarjetaEstudiosTresRef.innerHTML = `
                <h5 class="card-title card-title__personal">Cursos de programación</h5>
                <p class="card-text">Durante los años 2022 y 2023 realicé los cursos de Desarrollo Web, Javascript y React en la escuela de programación Coder House. En la sección de Proyectos Realizados se pueden observar parte de los trabajos realizados durante la cursada.</p>
                <p class="card-text"><small class="text-muted">Última actualización: 02/2023</small></p>
            `;

            break;
    
        case "/pages/proyectos.html":
            // Tarjeta de proyectos
            proyectosUnoRef.innerHTML = `
                En este breve ejemplo se utiliza al microcontrolador ESP32 como un punto de acceso para poder seleccionar la red WiFi a la cual conectarse. Una vez conectado,  continúa su utilización como una estación.
            `;

            proyectosDosRef.innerHTML = `
                Un microcontrolador ESP8266 es utilizado como punto de acceso para seleccionar una canción que se reproducirá al presión el timbre de un hogar.
            `;

            proyectosTresRef.innerHTML = `
                Seguimiento del crecimiento de plantas en un sistema de cultivo escalable. Tomando fotos y adquiriendo información de las condiciones climática se establece la condición óptima de crecimiento.
            `;

            proyectosCuatroRef.innerHTML = `
                Sistema de gestión para el uso en consultorios privados. Permite la operación de pacientes, secretaria y profesionales.
            `;

            proyectosCincoRef.innerHTML = `
                Desarrollo web llevado adelante con React. La aplicación permite el control de ventas y stock en un pequeño negocio.
            `;
            break;
    }    
}

function englishFill (){

    switch(paginaActual){
        case "/index.html":
            // Parrafos de presentacion personal
            parrafoPresentacionRef.setAttribute("class", "presentacion-personal col-lg-6 col-md-6");

            parrafoPresentacionRef.innerHTML = `
                <p id="parrafoUnoId" class="parrafo">¡Hello everyone! My name is Emanuel Moroni and I want to share with you, on this brief web syte, a little bit about me, my knowledge and habilities.</p>
                <p id="parrafoDosId"class="parrafo">In 2008 I began electronic engineering carreer at the National Technological University Buenos Aires Regional Faculty (UTN - FRBA), located in Buenos Aires city, Argentina.</p>
                <p id="parrafoTresId" class="parrafo">During all the carrer I learnt a lot of electronics and programming, specially about embedded systems programming. For the last mentioned I used C and C++ languages, but always supporting with others ones that were neccesary.</p>
                <p id="parrafoCuatroId" class="parrafo">In the last 5 years I've working as teacher at Roberto Rocca Technical School, teaching about electronics and programming. Using platforms such Arduino and NodeMCU, we could develop, with the students, a lot of projects that link up embedded systems, web development and databases management.</p>
                <p id="parrafoCincoId" class="parrafo">I invite you to travel through this space to know a little bit about me and my job. Feel in the freedom to ask, mention or criticize for improvements.</p>
            `;

            break;
        
        case "/pages/estudios.html":
            // Tarjetas de estudios
            tarjetaEstudiosUnoRef.setAttribute("class", "card-body");

            tarjetaEstudiosUnoRef.innerHTML = `
                <h5 class="card-title card-title__personal">Electronic Engineering</h5>
                <p class="card-text">In 2008 I started my degree in electronic engineering at the National Technological University, Buenos Aires Regional Faculty. Throughout the degree I learnt a lot about electronics and programming oriented to embedded systems. I currently have two finals left to finish.</p>
                <p class="card-text"><small class="text-muted">Last update: 02/2023</small></p>
            `;

            tarjetaEstudiosDosRef.setAttribute("class", "card-body");

            tarjetaEstudiosDosRef.innerHTML = `
                <h5 class="card-title card-title__personal">University Professor</h5>
                <p class="card-text">In the month of april of the year 2021 I began the higher teaching staff at the Universidad Austral. This training helped me to professionalize my task as a teacher even more. I will finish this faculty at the end of 2023.</p>
                <p class="card-text"><small class="text-muted">Last update: 02/2023</small></p>
            `;

            tarjetaEstudiosTresRef.setAttribute("class", "card-body");

            tarjetaEstudiosTresRef.innerHTML = `
                <h5 class="card-title card-title__personal">Programming Courses</h5>
                <p class="card-text">During the years 2022 and 2023 I took the Web Development, Javascript and React courses at the Coder House programming school. In the Completed Projects section you can see part of the work carried out during the course.</p>
                <p class="card-text"><small class="text-muted">Last update: 02/2023</small></p>
            `;

            break;

        case "/pages/proyectos.html":
            // Tarjeta de proyectos
            proyectosUnoRef.innerHTML = `
                In this short example, the ESP32 microcontroller is used as an access point to be able to select the WiFi network to connect to. Once connected, it continues to be used as a station.
            `;

            proyectosDosRef.innerHTML = `
                An ESP8266 microcontroller is used as an access point to select a song to be played by pressing a home doorbell.
            `;   

            proyectosTresRef.innerHTML = `
                Monitoring plant growth in a scalable cultivation system. Taking photos and acquiring information on climatic conditions establishes the optimal growth condition.
            `;

            proyectosCuatroRef.innerHTML = `
                Management system for use in private consulting rooms. It allows the operation of patients, secretary and professionals.
            `;

            proyectosCincoRef.innerHTML = `
                Web development carried out with React. The application allows control of sales and stock in a small business.
            `;
            
            break;
    }
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