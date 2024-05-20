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

let persona = {
    nombre: 'Santiago',
    edad: 43,
    mejorAmigo : {
        nombre: 'Fernando',
        edad: 40
    }
};

document.write(persona.mejorAmigo.nombre);