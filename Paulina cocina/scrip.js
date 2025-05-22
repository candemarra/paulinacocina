var input_nombre = document.getElementById("nombre")
var input_correo = document.getElementById("correo")
var input_submit= document.getElementById("submit")
var botocerrar= document.getElementById("botoncerrar")

input_submit.addEventListener("click", enviarFormulario);
function enviarFormulario(event) {
    event.preventDefault();
var valor_nombre = input_nombre.value;
var valor_correo = input_correo.value;

var placeholder_nombre = document.getElementById("nombre_placeholder");
 
placeholder_nombre.innerHTML = valor_nombre;

var elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");

var elemento_formulario = document.getElementById("formulario");
elemento_formulario.classList.add("oculto");
}
botoncerrar.addEventListener("click", cerrarPopup);

function cerrarPopup (){
    var elemento_popup = document.getElementById("feedback");
    elemento_popup.classList.add("oculto");
}