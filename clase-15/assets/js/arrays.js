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
]

function eliminarNombre(nombre) {
    const posicion = nombres.indexOf(nombre);
    nombres.splice(posicion, 1);
}

let nombreEliminar = prompt('Ingrese el nombre que desea eliminar');
eliminarNombre(nombreEliminar);


document.write(nombres);