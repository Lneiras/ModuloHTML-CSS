/* Con esto hacemos que el menú hamburguesa sea visible solo a partir del tamaño de ciertas pantallas y se oculte en pantallas más grandes. */ 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
