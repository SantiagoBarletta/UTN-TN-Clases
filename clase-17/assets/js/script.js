/* Funciones de Validación */

function validarEmail(email) {
    let emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    return emailValidacion.test(email);
}

function validarPassword(password) {
    return /[A-Z]/.test(password) && password.length >= 6 && !/\s/.test(password);
}

function validarOperacion(operacion) {
    return operacion === '+' || operacion === '-';
}

function validarNumero(valor) {
    let numero = parseFloat(valor);
    return !isNaN(numero);
}

/* Obtener Datos */

function obtenerDato(data) {
    let dato = prompt(data.mensaje);
    while (!data.validacion(dato)) {
        dato = prompt(data.error);
    }
    return dato;
}

/* Estructura de Datos */

const DATOS = {
    EMAIL: {
        mensaje: "Ingrese su correo electrónico:",
        error: "Error: ingrese un mail valido",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese su contraseña:",
        error: "Error: ingrese una contraseña valida",
        validacion: validarPassword
    },
    OPERACION: {
        mensaje: "Ingrese la operación (+ o -):",
        error: "Error: ingrese una operación válida (+ o -)",
        validacion: validarOperacion
    },
    NUMERO1: {
        mensaje: "Ingrese el primer número:",
        error: "Error: ingrese un número",
        validacion: validarNumero
    },
    NUMERO2: {
        mensaje: "Ingrese el segundo número:",
        error: "Error: ingrese un número",
        validacion: validarNumero
    }
};

/* Función de Login */

function login() {
    let email = obtenerDato(DATOS.EMAIL);
    let password = obtenerDato(DATOS.PASSWORD);
    return { email: email, password: password };
}

let usuario = login();
console.log(usuario);

/* Función de Cálculo */

function calcular(operacion, numero1, numero2) {
    let resultado;
    if (operacion === '+') {
        resultado = parseFloat(numero1) + parseFloat(numero2);
        alert(`El resultado de ${numero1} + ${numero2} es: ${resultado}`);
    } else if (operacion === '-') {
        resultado = parseFloat(numero1) - parseFloat(numero2);
        alert(`El resultado de ${numero1} - ${numero2} es: ${resultado}`);
    }
    // Añadir operación al historial
    agregarAlHistorial('CALCULAR', operacion, numero1, numero2, resultado);
}

/* Función para agregar al historial */

let historial = [];

function agregarAlHistorial(accion, operacion, a, b, resultado) {
    historial.push({ accion, operacion, a, b, resultado });
}

/* Función para renderizar el historial */

function renderizarHistorial(historial) {
    let muestraHistorial = 'El historial es:\n';
    for (let dato of historial) {
        muestraHistorial += `
        Accion: ${dato.accion}
        Operacion: ${dato.operacion}
        Numeros: ${dato.a}, ${dato.b}
        Resultado: ${dato.resultado}\n`;
    }
    return muestraHistorial;
}

/* Función Principal de la Calculadora */

function calculadora() {
    let operacion = obtenerDato(DATOS.OPERACION);
    let numero1 = parseFloat(obtenerDato(DATOS.NUMERO1));
    let numero2 = parseFloat(obtenerDato(DATOS.NUMERO2));
    calcular(operacion, numero1, numero2);
    alert(renderizarHistorial(historial));
}

calculadora();

console.log(renderizarHistorial(historial))

function obtenerHistorial() {
    return historial;
}

let datoImportante = 'el mate se toma amargo';

localStorage.setItem('importante:', datoImportante);

localStorage.getItem(importante)

