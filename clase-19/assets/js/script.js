// const titulo = document.getElementById('titulo');
// const subtitulo = document.getElementById('subtitulo');

// titulo.innerHTML = 'Hola mundo';
// subtitulo.innerHTML = 'Soy el subtituto';

// const caja = document.getElementById('producto');

// const producto = {
//     precio: 2500,
//     nombre: 'Laptop',
//     marca: 'Apple',
//     color: 'negro'
// };


// caja.innerHTML = 
// `<h1>Soy el producto</h1>
// <h1>Nombre: ${producto.nombre}</h1>
// <p>Marca: ${producto.marca}</p> 
// <p>Precio: ${producto.precio}</p>
// <p>Color: ${producto.color}</p>`;

/////////////////////////////////////////////////////////////EJEMPLO

// const cajaUser = document.getElementById('user');

// const user = {
//     username: 'pepito',
//     password: '1234',
//     email: 'pepito@pepito.com',
//     direccion: 'calle falsa 123'

// }

// cajaUser.innerHTML = 
// `<h2>Usuario: ${user.username}</h2>
// <span>password: ${user.password}</span>
// <input type="text" value="${user.email}">
// <input type="text" value="${user.direccion}">`;


///////////////////////////////////////////////OTRO EJEMPLO


// const protuctosContainerHTML = document.getElementById('productos-container');

// const productos = [
//     {
//         nombre: 'Laptop',
//         precio: 2500,
//         descripcion : 'La mejor laptop de todos los tiempos'
//     },
//     {
//         nombre: 'Tablet',
//         precio: 1500,
//         descripcion : 'La mejor tablet de todos los tiempos'
//     },
//     {
//         nombre: 'Smartphone',
//         precio: 800,
//         descripcion : 'El mejor telefono de todos los tiempos'
//     },
//     {
//         nombre: 'Audifonos',
//         precio: 100,
//         descripcion : 'Los mejores audifonos de todos los tiempos'
//     }
// ];

// let Lista = '';

// for (const producto of productos){
//     Lista = Lista += `
//     <h2>${producto.nombre}</h2>
//     <p>${producto.precio}</p>
//     <p>${producto.descripcion}</p>`;
// }
 
// protuctosContainerHTML.innerHTML = Lista


///////////////////////////////////////////////////TAREA

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

const historialContainerHTML = document.querySelector('.lista');

historialList = '';

for (const producto of historial){
    historialList = historialList += `
    <div class="producto">
        <span class="producto-id">${producto.id}</span>
        <h3>${producto.nombre}</h3>
        <span>${producto.fecha}</span>
        <button class="boton">Click me</button>
        <hr>
    </div>`;

}
// historialContainerHTML.innerHTML = historialList;

//         const botones = document.querySelectorAll('.boton');

//         botones.forEach(boton => {
//             boton.addEventListener('click', () => {
//                 boton.classList.toggle('activo');
//                 boton.classList.toggle('inactivo');
//                 boton.textContent = boton.classList.contains('activo') ? 'activo' : 'inactivo';
//             });
//         });
        

// historialContainerHTML.innerHTML = historialList

