let idiomaActual = "es";

function toggleLang() {
    idiomaActual = idiomaActual === "es" ? "en" : "es";

    const elementos = document.querySelectorAll("[data-es][data-en]");
    const botonTraducir = document.getElementById("btn-traducir");
    const pagina = document.getElementById("pagina");

    elementos.forEach((elemento) => {
        const texto = elemento.getAttribute(`data-${idiomaActual}`);

        if (texto) {
            elemento.textContent = texto;
        }
    });

    if (botonTraducir) {
        botonTraducir.textContent = idiomaActual === "es" ? "EN" : "ES";
    }

    if (pagina) {
        pagina.setAttribute("lang", idiomaActual);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const enlacesMenu = document.querySelectorAll(".navbar-nav .nav-link");
    const menu = document.getElementById("menu");

    enlacesMenu.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            if (menu && menu.classList.contains("show")) {
                const menuBootstrap = bootstrap.Collapse.getInstance(menu);

                if (menuBootstrap) {
                    menuBootstrap.hide();
                }
            }
        });
    });

    const secciones = document.querySelectorAll("section[id]");
    const enlaces = document.querySelectorAll(".nav-link[href^='#']");

    window.addEventListener("scroll", () => {
        let seccionActual = "";

        secciones.forEach((seccion) => {
            const posicion = seccion.offsetTop - 120;

            if (window.scrollY >= posicion) {
                seccionActual = seccion.getAttribute("id");
            }
        });

        enlaces.forEach((enlace) => {
            enlace.classList.remove("active");

            if (enlace.getAttribute("href") === `#${seccionActual}`) {
                enlace.classList.add("active");
            }
        });
    });
});