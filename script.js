
//  S A L U D O 
//             Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto-


document.addEventListener("DOMContentLoaded", function(){
    let nombreUsuario = prompt("Por favor, ingresá tu nombre:");
    if (nombreUsuario !== null && nombreUsuario != "") {
        alert.saludo(nombreUsuario)
    } else {
        alert("INGRESA ALGO VALIDO")
    }
});

function saludo(nombreUsuario){
    let h1 = document.createElement("h1");
    h1.textContent = "¡Hola, " + nombre + "!";
    h1.style.textAlign = center;
    h1.style.fontFamily = "Roboto, san-serif"
    h1.style.fontFamily = "24px";
    document.body.appendChild(h1);
}


let button = document.getElementById