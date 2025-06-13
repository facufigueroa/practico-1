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
    window.scrollTo({top: 0, behavior: 'smooth'})
}

/**
 * Mostrar / ocultar campo en el formulario
 */

const opciones = document.getElementById("OpcionesSelect")
const campo = document.getElementById("campoExtra")

opciones.addEventListener("change", function() {
    if (opciones.value === "Otro") {
        campo.classList.remove("escondido")
    } else {
        campo.classList.add("escondido")
    }
})

/**
 * Acción del botón submit del formulario
 */

const botonSubmit = document.getElementById("Enviar")

botonSubmit.addEventListener("click", () => {
    alert("Mensaje enviado")
})