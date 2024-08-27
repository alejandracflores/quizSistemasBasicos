// Elementos HTML
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

// Evento click del botón comenzar
btnComenzar.addEventListener("click",()=>{
    // Variables en localStorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("categorias-jugadas");
    
    // Redirigir al menú
    location.href="menu.html";
})