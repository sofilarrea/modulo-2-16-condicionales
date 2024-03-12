let titulo = document.getElementById("titulo"); 
let imagen = document.getElementById("imagen"); 
let link = document.getElementById("link"); 


let promptTitulo = prompt("ingrese un titulo"); 
let promptImagen = prompt("ingrese url de una imagen"); 
let promptLink = prompt("ingrese link del articulo");

// Acceder al contenido texto textcontent
titulo.textContent = promptTitulo;
imagen.src = promptImagen;
link.href =promptLink;


console.log(promptTitulo === ""); // no dejo espacio porque si tengo espacio es un string y me va a permitir poner enter
if (promptTitulo === "") { 
alert("Escribe un titulo por favor"); 
}if (promptImagen === "") { 
alert("url invalida"); 
}if (promptLink === "") { 
alert("link invalida"); 
} 