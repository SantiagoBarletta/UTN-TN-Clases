/* 1 */

let url = prompt('Ingrese la URL a verificar');

function checkURL(url) {
    if (url.startsWith('https://')){
        console.log('la url ingresada, cuenta con certificado ssl')
    }
    else if (url.startsWith('http://')){
        console.log('la url ingresada, no cuenta con certificado ssl')
    }
    else{
        console.log('la url ingresada no tiene un formato valido')
    }
}

checkURL(url);

/* 2 */

let codes = ['hola%20como%20estas,%20todo%20bien?', 'no%20me%20siento%20bien', 'que%20mal'];

for (let code of codes) {
    code = (code.replaceAll('%20', ' '));

    let longitud;
    if (code.length <= 8) {
        longitud = "el mensaje es corto";
    } else if (code.length >= 9 && code.length <= 18) {
        longitud = "el mensaje es mediano";
    } else {
        longitud = "el mensaje es largo";
    }

    let complejidad = "el mensaje no es complejo";
    if (code.includes(",") || code.includes("@") || code.includes("-")) {
        complejidad = "el mensaje es complejo";
    }
    console.log('El código descifrado es: "' + code + '", ' + longitud + ', ' + complejidad);
}

/* 3 */

let mensaje = prompt('Ingrese un mensaje:');

let cifrado = mensaje.replaceAll(' ', '%20');

console.log('El mensaje cifrado queda asi: ' + cifrado);

let descifrado = cifrado.replaceAll('%20', ' ');

console.log('Su mensaje descifrado queda asi: ' + descifrado);

/* 4 */

let palabra = prompt('ingrese una palabra:');
if (/[A-Z]/.test(palabra)) {
    console.log('La palabra tiene mayúscula.');
    } else {
    console.log('La palabra tiene minúscula.');
    }
/* 28 */

let distancia = prompt("Ingresá la distancia del recorrido");

distancia = parseFloat(distancia);

const tiempoAPie = distancia / 5;
const tiempoEnBicicleta = distancia / 10;
const tiempoEnAuto = distancia / 50;

console.log(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${tiempoEnBicicleta.toFixed(2)} hora/s, a pie ${tiempoAPie.toFixed(2)} hora/s y en auto ${tiempoEnAuto.toFixed(2)} hora/s`);


/* 29 */
function puedeVerPelicula(edad, tieneAutorizacion) {
    if (edad >= 15 || tieneAutorizacion) {
        return true; 
    } else {
        return false;
    }
}

console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true)); 
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true)); 

/* 30 */

function esVocal(string){
    letra = letra.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra);
}

console.log(esVocal('a'));
console.log(esVocal('n'));
console.log(esVocal('e'));