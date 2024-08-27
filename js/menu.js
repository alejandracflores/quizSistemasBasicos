// Elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");


// Puntaje en el localstorage (en caso de ya estar jugando)
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Guardar las categorias ya jugadas
let categoriasJugadas;
// Si ya se jugó, se redirige a la pàgina del juego para cargar las categorías ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
// Arreglo vacío si aun no se ha jugado
} else {
    categoriasJugadas = [];
}
console.log(categoriasJugadas);

// Eventlistener al botón de cada categoría
function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            // Almacenar la categoría actual en el localstorage
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            // Agregar la categoría a las categorías jugadas
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            console.log(categoriasJugadas);
            // Redirigir al juego
            location.href = "juego.html";
        });
    });

    // Deshabilitar categorías ya jugadas
    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })
}
agregarEventListenerOpciones();