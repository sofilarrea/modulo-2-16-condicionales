let display = document.getElementById("display");
let boton1 = document.getElementById("boton-1");
let boton2 = document.getElementById("boton-2");
let boton3 = document.getElementById("boton-3");
let boton4 = document.getElementById("boton-4");
let boton5 = document.getElementById("boton-5");
let boton6 = document.getElementById("boton-6");
let boton7 = document.getElementById("boton-7");
let boton8 = document.getElementById("boton-8");
let boton9 = document.getElementById("boton-9");
let boton0 = document.getElementById("boton-0");
let botonPlus = document.getElementById("boton-plus");
let botonMinus = document.getElementById("boton-minus");
let botonC = document.getElementById("boton-c");
let botonEqual = document.getElementById("boton-equal");

let resultado = {
leftNumber: null,
operator: null,
rightNumber: null,
result: null,
};

boton1.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "1" : resultado.leftNumber + "1";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "1" : resultado.rightNumber + "1";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton2.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "2" : resultado.leftNumber + "2";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "2" : resultado.rightNumber + "2";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton3.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "3" : resultado.leftNumber + "3";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "3" : resultado.rightNumber + "3";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton4.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "4" : resultado.leftNumber + "4";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "4" : resultado.rightNumber + "4";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton5.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "5" : resultado.leftNumber + "5";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "5" : resultado.rightNumber + "5";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton6.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "6" : resultado.leftNumber + "6";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "6" : resultado.rightNumber + "6";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton7.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "7" : resultado.leftNumber + "7";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "7" : resultado.rightNumber + "7";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton8.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "8" : resultado.leftNumber + "8";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "8" : resultado.rightNumber + "8";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton9.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "9" : resultado.leftNumber + "9";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "9" : resultado.rightNumber + "9";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

boton0.addEventListener("click", () => {
if (!resultado.operator) {
resultado.leftNumber = !resultado.leftNumber ? "0" : resultado.leftNumber + "0";
display.textContent = resultado.leftNumber;
} else {
resultado.rightNumber = !resultado.rightNumber ? "0" : resultado.rightNumber + "0";
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

botonPlus.addEventListener("click", () => {
resultado.operator = "+";
if (!resultado.rightNumber) {
display.textContent = resultado.leftNumber + resultado.operator;
} else {
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

botonMinus.addEventListener("click", () => {
resultado.operator = "-";
if (!resultado.rightNumber) {
display.textContent = resultado.leftNumber + resultado.operator;
} else {
display.textContent = resultado.leftNumber + resultado.operator + resultado.rightNumber;
}
});

botonC.addEventListener("click", () => {
resultado = {
leftNumber: null,
operator: null,
rightNumber: null,
result: null,
};
display.textContent = "0";
});

botonEqual.addEventListener("click", () => {
if (resultado.operator === "+") {
resultado.result = +resultado.leftNumber + +resultado.rightNumber;
display.textContent = resultado.result;
} else {
resultado.result = +resultado.leftNumber - +resultado.rightNumber;
display.textContent = resultado.result;
}
});