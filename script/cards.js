titulo = document.getElementById("titulo"); 
let imagen = document.getElementById("imagen"); 
let link = document.getElementById("link"); 


let milanesaTitulo = prompt("ingrese un titulo"); 
let milanesaImagen = prompt("ingrese url de una imagen"); 
let milanesaLink = prompt("ingrese link del articulo");

titulo.textContent = milanesaTitulo; 
imagen.src = milanesaImagen; 
link.href = milanesaLink; 


console.log(milanesaTitulo === ""); 
if (milanesaTitulo === "") { 
alert("escribe un titulo por favor"); 
}if (milanesaImagen === "") { 
alert("url invalida"); 
}if (milanesaLink === "") { 
alert("link invalida"); 
} 