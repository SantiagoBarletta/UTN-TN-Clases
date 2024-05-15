/*1*/

let tieneHijos = false;

if (tieneHijos == true) {
    console.log ("Tiene hijos");
}
else {
    console.log ("No tiene hijos");
}

/*2*/

let genero = hombre;
if (genero == hombre) {
    console.log ("Eres Hombre");
}
else {
    console.log ("Eres Mujer");
}

/*3*/

let lado = prompt("Ingrese el valor del lado del cuadrado:");
lado = parseFloat(lado);

if (isNaN(lado) || lado <= 0) {
    console.log("El valor ingresado no es válido. Por favor, ingrese un número positivo.");
} else {
    let perimetro = lado * 4;
    console.log("El perímetro del cuadrado con lado " + lado + " es: " + perimetro);
}

/*4*/

let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");
let num4 = prompt("Ingrese el cuarto número:");

num1 = parseFloat(numero1);
num2 = parseFloat(numero2);
num3 = parseFloat(numero3);
num4 = parseFloat(numero4);

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    console.log("Uno o más valores ingresados no son válidos. Por favor, ingrese números válidos.");
} else {
    var resultado1 = num1 + num2;
    var resultado2 = num3 * num4;

    // Mostramos los resultados por pantalla
    console.log("La suma de los dos primeros números es: " + suma);
    console.log("La multiplicación del tercer y cuarto número es: " + multiplicacion);
}

/*5*/

let valor_entero = prompt("Ingrese un número entero:");

valor_entero = parseFloat(valor_entero);
if (isNaN(valor_entero)) {
    console.log("El valor ingresado no es válido. Por favor, ingrese un número entero.");
}
else{
    {
        if (valor_entero > 0) {
            console.log("El número ingresado es positivo.");
        } else if (valor_entero === 0) {
            console.log("El número ingresado es 0.");
        } else {
            console.log("El número ingresado es negativo.");
        }
    }
}

/*6*/

let edad = 18;
let tienePermiso = true;

if (edad >= 18 && tienePermiso == true) {
    console.log("Puedes conducir");
}
else {
    console.log("No puedes conducir");
}