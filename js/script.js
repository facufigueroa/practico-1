/**
 * Lógica botón toTop
 */

// Obtengo el botón
let miBoton = document.getElementById("boton")

// Función para cambiar la visibilidad de mi botón
function hayScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        miBoton.style.display = "block"
    } else {
        miBoton.style.display = "none"
    }
}

// Detecto si el usuario scrolleo y llamo a la función hayScroll()
window.onscroll = () => {hayScroll()}

// Función para ir arriba de la página
function haciaArriba() {
    window.scrollTo({top: 0})
}


/**
 * Mostrar / ocultar campo en el formulario
 */

// Obtengo el elemento select
const opciones = document.getElementById("OpcionesSelect")
// Obtengo el campo oculto
const campo = document.getElementById("campoExtra")

// Evento para cambiar la visibilidad del campo dependiendo del valor escojido por el usuario
opciones.addEventListener("change", function() {
    if (opciones.value === "Otro") {
        campo.classList.remove("escondido")
    } else {
        campo.classList.add("escondido")
    }
})


/**
 * Acción de enviar el formulario
 */

// Obtengo el formulario
const form = document.getElementById("formulario")

// Evento para el envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Mensaje enviado")
    form.reset()
})