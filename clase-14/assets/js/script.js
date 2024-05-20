// let nombre = 'Juan';

// for (let i=1; i<=10; i++){
//     alert(i);
// }


// let suma = 0;
// for (let i = 1; i <= 3; i++) {
//     let numero = prompt('ingresa un número');
//     while (!numero || isNaN(numero)) {
//         numero = prompt('ERROR: ingresa un número');
//     }
//     numero = parseInt(numero);
//     suma += numero;
// }
// alert('La suma de los números ingresados es: ' + suma);





let lista = '';
let cantidad = prompt("Ingrese la cantidad de personas en la clase: ");
cantidad = parseFloat(cantidad);

for (let i = 1; i <= cantidad; i++) {
    let nombre = prompt(`Ingresa el nombre del alumno: `);
    lista += '-' + nombre +'\n';
}

alert("Lista de alumnos:\n" +(lista));


