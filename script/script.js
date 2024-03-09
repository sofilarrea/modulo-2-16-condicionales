
//  S A L U D O 
//             Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto-


// document.addEventListener("DOMContentLoaded", function(){
//     let nombreUsuario = prompt("Por favor, ingresá tu nombre:");
//     if (nombreUsuario !== null && nombreUsuario != "") {
//         alert.saludo(nombreUsuario)
//     } else {
//         alert("INGRESA ALGO VALIDO")
//     }
// });

// function saludo(nombreUsuario){
//     let h1 = document.createElement("h1");
//     h1.textContent = "¡Hola, " + nombre + "!";
//     h1.style.textAlign = center;
//     h1.style.fontFamily = "Roboto, san-serif"
//     h1.style.fontFamily = "24px";
//     document.body.appendChild(h1);
// }


// let button = document.getElementById


// color
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// document.addEventListener("DOMContentLoaded", function(){
//     let colorHexadecimal = prompt("Por favor ingresa tu color favorito!")
//     if(colorHexadecimal !== null && colorHexadecimal !== ""){
//         cambiarColorDeFondo(colorHexadecimal)
//     } else {
//         "Ingresá un color valido"
//     }
// });
// function cambiarColorDeFondo(colorHexadecimal){
//     document.body.style.backgroundColor = colorHexadecimal;
// }

// rgb
//Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul. //

//document.addEventListener("DOMContentLoaded", function () {
//     let colorUno = prompt("Ingresá el valor del color rojo (entre 0 y 255)");
//     let colorDos = prompt("Ingresá el valor del color verde (entre 0 y 255)");
//     let colorTres = prompt("Ingresá el valor del color azul (entre 0 y 255)");

    
//     if (colorUno !== null && colorDos !== null && colorTres !== null &&
//      !isNaN(colorUno) && !isNaN(colorDos) && !isNaN(colorTres) &&//
//         colorUno >= 0 && colorUno <= 255 &&
//         colorDos >= 0 && colorDos <= 255 &&
//         colorTres >= 0 && colorTres <= 255) {
        
//         let colorTotal = "rgb(" + colorUno + ", " + colorDos + ", " + colorTres + ")";
//         document.body.style.backgroundColor = colorTotal;
//     } else {
//         alert("Los valores ingresados no son válidos");
//     }
// });//


// imagen //
//Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo: //
document.addEventListener("DOMContentLoaded", function () {
    let tamañoImagen = prompt("Por favor, elige el tamaño de la imagen (chica, mediana o grande):").toLowerCase();
    
    let imagen = document.getElementById("imagen");
    if (tamañoImagen === "chica") {
        imagen.classList.add("chica");
    } else if (tamañoImagen === "mediana") {
        imagen.classList.add("mediana");
    } else if (tamañoImagen === "grande") {
        imagen.classList.add("grande");
    } else {
        alert("Opción no válida. La imagen permanecerá sin cambios.");
    }
});
