/*Arrays*/

// let notaTrimestre1 = 9;
// let notaTrimestre2 = 8;
// let notaTrimestre3 = 7;

// let notasTrimestre = [9, 8, 7];

// document.write('El segundo trimestre te sacaste un: ' + notasTrimestre[1]);

// console.log(notasTrimestre.length);


// const nombres = ['Santiago', 'Pablo', 'Leo', 'Daiana', 'Fernando', 'Marcos', 'Nico', 'Leo'];

// // nombres[nombres.length - 1] = 'Ricardo';



// nombres.unshift('Macarena');

// console.log(nombres);

// let posicionDaiana = nombres.indexOf('Daiana');
// nombres[posicionDaiana] = "Manianela"

const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
];

function eliminarNombre(nombre) {
    const posicion = nombres.indexOf(nombre);
    if (posicion !== -1) {
        nombres.splice(posicion, 1);
    } else {
        console.log("El nombre no se encontró en la lista.");
    }
}

let nombreEliminar = prompt('Lista de nombres: ' + nombres + '\nIngrese el nombre que desea eliminar');
eliminarNombre(nombreEliminar);

for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');
}
