// const nombres = ['pepe', 'juan', 'maria', 'pedro', 'valentina', 'alex'];

// for (let nombre = 0; nombre < nombres.length; nombre++){
//     document.write('<h1>Hola ' + nombres[nombre] + '</h1>');
// }

// const carrito = [
//     { nombre: 'Monitor 20 Pulgadas', precio: 500, cantidad: 3},
//     { nombre: 'Televisión 50 Pulgadas', precio: 700, cantidad: 2},
//     { nombre: 'Tablet',precio: 300, cantidad: 1},
//     { nombre: 'Audifonos',precio: 200, cantidad: 2},
//     { nombre: 'Teclado',precio: 50, cantidad: 3},
//     { nombre: 'Celular',precio: 500, cantidad: 2},
//     { nombre: 'Bocinas',precio: 300, cantidad: 2},
//     { nombre: 'Laptop',precio: 800, cantidad: 1},
// ]

// let contenidoHTML = '';
// for (let i = 0; i < carrito.length; i++){
//     const producto = carrito[i];
//     contenidoHTML += 'Hola, has comprado: ' + producto.nombre + ' a un precio de: $' + producto.precio + '<hr>';
// }

// document.getElementById('carrito').innerHTML = contenidoHTML;


// const personajes = [
//     { nombre: 'Santiago', apellido: 'Barletta', edad: 43},
//     { nombre: 'Daiana', apellido: 'Juan', edad: 31},
//     { nombre: 'Pablo', apellido: 'Pereyra', edad: 48},
// ]
// let sumaEdades = 0;

//     for (let i = 0; i < personajes.length; i++){
//         const personaje = personajes[i];
//         document.write('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años <hr>');
//         sumaEdades += personaje.edad;
// }

// document.write('La sumatoria de las edades es: ' + sumaEdades);

// const personajes = [
//     { nombre: 'Santiago', apellido: 'Barletta', edad: 43 },
//     { nombre: 'Daiana', apellido: 'Juan', edad: 31 },
//     { nombre: 'Pablo', apellido: 'Pereyra', edad: 48 },
// ]
// let sumaEdades = 0;
// for (const personaje of personajes) {
//     document.write('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años <hr>');
//     sumaEdades += personaje.edad;}
//      document.write('La sumatoria de las edades es: ' + sumaEdades);


// let resultado = '';

const personajes = [
    { nombre: 'Santiago', apellido: 'Barletta', edad: 43 },
    { nombre: 'Daiana', apellido: 'Juan', edad: 31 },
    { nombre: 'Pablo', apellido: 'Pereyra', edad: 48 },
];

for (const persona of personajes) {
    for (const propiedad in persona) {
        document.write('<span>' + propiedad + ':' + persona[propiedad] + '</span> \n');
    }

}
////////////FOREACH/////////////////////

// const personajes = [
//     { nombre: 'Santiago', apellido: 'Barletta', edad: 43 },
//     { nombre: 'Daiana', apellido: 'Juan', edad: 31 },
//     { nombre: 'Pablo', apellido: 'Pereyra', edad: 48 },
// ];

// personajes.forEach(function (personaje){
//     document.write('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años <hr>');
// })

// const personajesViejos = personajes.filter(function(personaje){
//     return personaje.edad >= 40
// })

// personajesViejos.forEach(function(personaje){
//     document.write('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años <hr>');
// })

// const productos = [
//     {  id: 1, nombre: 'Monitor 20 Pulgadas', marca: 'Samsung', precio: 5000 },
//     {  id: 2, nombre: 'Televisión 50 Pulgadas', marca: 'Noblex', precio: 7000 },
//     {  id: 3, nombre: 'Tablet', marca: 'Apple',precio: 3000 },
//     {  id: 4, nombre: 'Audifonos', marca: 'Sony',precio: 2000 },
//     {  id: 5, nombre: 'Teclado', marca: 'Logitech',precio: 5000 },
//     {  id: 6, nombre: 'Celular', marca: 'Noblex',precio: 5000 },
//     {  id: 7, nombre: 'Televisión 59 Pulgadas', marca: 'LG',precio: 1000 },
//     {  id: 8, nombre: 'Laptop', marca: 'Apple',precio: 2000 },
// ]

// const preciosBajos = productos.filter(function(producto){
//     return producto.precio < 2900
// })

// const productosNoblex = productos.filter(function(producto){
//     return producto.marca === 'Noblex'
// })

// const productosTv = productos.filter(function(producto){
//     return producto.nombre.includes('Televisión')
// })

// console.log(preciosBajos)

// console.log(productosNoblex)

// console.log(productosTv)


// const productos = [
//     {  id: 1, nombre: 'Monitor 20 Pulgadas', marca: 'Samsung', precio: 5000 },
//     {  id: 2, nombre: 'Televisión 50 Pulgadas', marca: 'Noblex', precio: 7000 },
//     {  id: 3, nombre: 'Tablet', marca: 'Apple',precio: 3000 },
//     {  id: 4, nombre: 'Audifonos', marca: 'Sony',precio: 2000 },
//     {  id: 5, nombre: 'Teclado', marca: 'Logitech',precio: 5000 },
//     {  id: 6, nombre: 'Celular', marca: 'Noblex',precio: 5000 },
//     {  id: 7, nombre: 'Televisión 59 Pulgadas', marca: 'LG',precio: 1000 },
//     {  id: 8, nombre: 'Laptop', marca: 'Apple',precio: 2000 },
// ]

// const productosBaratos = []
// for(const producto of productos){
//     if(producto.precio < 3000){
//         productosBaratos.push(producto)}
// }

// console.log(productosBaratos)

// const pepe = productos.find(function(producto){
//     return producto.marca === 'Noblex'
// })
// console.log(pepe)


// const mapProductos = productos.map(function(producto){
//     return '<div>' + producto.nombre + '</div>';
// });

// document.write(mapProductos.join(''));