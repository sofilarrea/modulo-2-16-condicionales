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

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010
//
function obtenerGeneracion(edad) {
  let generacion;

  if (edad >= 1949 && edad <= 1968) {
      generacion = "Baby Boomer";
  } else if (edad >= 1969 && edad <= 1980) {
      generacion = "Generation X";
  } else if (edad >= 1981 && edad <= 1993) {
      generacion = "Millennial";
  } else if (edad >= 1994 && edad <= 2010) {
      generacion = "Generation Z";
  } else {
      generacion = "Too young!";
  }

  return "You are a " + generacion;
}
// console.log(obtenerGeneracion(1955))

// Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:
//Temperatura	Mensaje
// Menor a 0°	¡Está helando!
// Mayor o igual a 0° y menor a 15°	¡Hace frío!
// Mayor o igual a 15° y menor a 25°	Está lindo
// Mayor o igual a entre 25° y menor a 30°	Hace calor
// Mayor o igual de 30°	¡Hace mucho calor!

function obtenerSensacion(temperatura) {
  let mensaje;
  if (temperatura === 0){
    mensaje = "¡Está Helando!"
  } else if (temperatura >= 0 && temperatura <= 15){
    mensaje = "Está Lindo"
  } else if (temperatura >= 15 && temperatura < 30){
    mensaje = "Hace calor"
  } else if (temperatura >= 30){
    mensaje = "Hace demasiado calor!"
  } else {
    return "Ingresá una temperatura válida"
  }
  return mensaje
}
// console.log(obtenerSensacion(38));

// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Puntaje	Nota
// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido

// function obtenerNota(puntaje){
//   let string;
//   if (puntaje < 6){
//     string = "Desaprobado"
//   } else if (puntaje >= 6 && puntaje <= 7){
//     string = "Regunlar"
//   } else if (puntaje >=7 && puntaje <= 8){
//     string = "Bueno"
//   } else if (puntaje >= 8 && puntaje <= 9){
//     string = "Muy bueno"
//   } else if (puntaje === 10){
//     string = "Excelente"
//   } else {
//     string = "Puntaje Inválido"
//   }
//   return string
// }
// console.log(obtenerNota(0));
// console.log(obtenerNota(8));


function onbtenerNota(puntaje){
  let string;
  switch (true) {
    case puntaje < 6:
      string = "Desaprobaste"
      break;
      case puntaje >= 6 && puntaje <= 7:
        string = "Regular"
        break;
        case puntaje >=7 && puntaje <= 8:
          string = "Bueno"
          break;
          case
          puntaje >= 8 && puntaje <= 9:
            string = "Muy Bueno"
            break;
            case puntaje === 10:
              string = "Excelente"
              break;
                default:
                  string = "Ingresa un puntaje válido"
                  break;
  }
  return string
}
console.log(onbtenerNota(10))
console.log(onbtenerNota(0))
