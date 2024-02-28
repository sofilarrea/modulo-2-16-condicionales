// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.//

function puedeVerPelicula(edad, Autorizado) {
    if (edad >= 15 || Autorizado === true) {
        return true
    } else {
        return false
    }
}

// console.log(puedeVerPelicula(12, false))
// console.log(puedeVerPelicula(12, true))
// console.log(puedeVerPelicula(16, false))
// console.log(puedeVerPelicula(18, true))

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido//

function puedeAvanzar(color){
    if (color === "verde"){
        return true
    }
    else if (color === "amarillo" || color === "rojo"){
        return false
    }
    else {
        return "Error: color de semáforo inválido"
    }
}


// console.log(puedeAvanzar("verde"))
// console.log(puedeAvanzar("amarillo"))
// console.log(puedeAvanzar("rojo"))
// console.log(puedeAvanzar("lila"))


// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es. //

function esVocal(letra){
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return true
    }
    else {
        return false
    }   
}

// console.log(esVocal("a"))
// console.log(esVocal("n"))

// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es.//

function esConsonante(letra){
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return false
    }
    else {
        return true
    }   
}

// console.log(esConsonante("a"))
// console.log(esConsonante("n"))

// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos //

function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos){
    if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
        return true
    }
    else {
        return false
    }
}

// console.log(puedeRenovarCarnet(true, false, true))
// console.log(puedeRenovarCarnet(false, true, true))

// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada. //

function puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada){
    if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
        return true
    }
    else {
        return false
    }
}

// console.log(puedeGraduarse(80, 50, true))
// console.log(puedeGraduarse(80, 50, false))

// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar //

function esParOImpar(numero){
    if (numero % 2 === 0) {
        return "'par'"
    }
    else{
        return "'impar'"
    }
}

// console.log(esParOImpar(3))
// console.log(esParOImpar(10))

//Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo //
function esPositivoONegativo(numero){
    if (numero  >= 0) {
        return "'positivo'"
    }
    else{
        return "'negativo'"
    }
}

// console.log(esPositivoONegativo(2))
// console.log(esPositivoONegativo(-1))


// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde //
function avanzarSemaforo(colorActual) {
    if (colorActual === 'verde') return 'amarillo';
    if (colorActual === 'amarillo') return 'rojo';
    if (colorActual === 'rojo') return 'verde';
    return 'color no válido';
}

// console.log(avanzarSemaforo('verde'))
// console.log(avanzarSemaforo('rojo'))
// console.log(avanzarSemaforo('amarillo'))


//Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes //

function obtenerDiasMes(mes) {
    if (mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre') {
        return 31;
    } else if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre') {
        return 30;
    } else if (mes === 'febrero') {
        return 28; 
    } else {
        return 'Mes no válido';
    }
}

// console.log(obtenerDiasMes('febrero')); 
// console.log(obtenerDiasMes('septiembre')); 
// console.log(obtenerDiasMes('diciembre')); 
// console.log(obtenerDiasMes('febrer')); 
