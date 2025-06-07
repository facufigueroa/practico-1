// Obtengo el botón
let miBoton = document.getElementById("boton")

// Función para cambiar la visibilidad de mi botón
function hayScroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        miBoton.style.display = "block"
    } else {
        miBoton.style.display = "none"
    }
}

// Detecto si el usuario scrolleo y llamo a la función hayScroll()
window.onscroll = () => {hayScroll()}

// Función para ir arriba de la página
function haciaArriba() {
    // Para Safari
    document.body.scrollTop = 0
    // Otros navegadores
    document.documentElement.scrollTop = 0
}