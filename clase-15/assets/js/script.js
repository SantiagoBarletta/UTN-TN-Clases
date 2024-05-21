/*Objetos*/ 

let usuario = {
    edad:90,
    nombre:"Santi",
    apellido:"Perez"
};

let producto = {
    precio: 2500,
    nombre: 'Cigarillos',
    descripcion: 'Paquete de 20 unidades',
    marca: 'Lucky Strike'
};

const persona = {
    nombre: 'Santiago',
    edad: 43,
    mejorAmigo : {
        nombre: 'Fernando',
        edad: 40
    }
};
persona.mejorAmigo.nombre = 'Pepe'


const persona2 = {
    nombre: 'pepe',
}
persona2.nroCelular = '+5492323651004';

console.log(persona);

document.write(persona.nombre);