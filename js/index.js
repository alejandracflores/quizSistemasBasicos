// Elementos HTML
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

// Evento click del botón comenzar
btnComenzar.addEventListener("click", () => {
    // Validar que el usuario si ingrese su nombre
    if (nombre.value.trim() === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor, ingresa tu nombre',
            icon: 'error',
            confirmButtonText: 'OK',
            heightAuto: false
        });
        return;
    }
    // Guardar el nombre y otras variables en localStorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total", 0);
    localStorage.removeItem("categorias-jugadas");

    // Redirigir al menú
    location.href = "menu.html";
});
