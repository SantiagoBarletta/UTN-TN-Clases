// function alertar () {
//     alert ("Hola evento click");
// }

// const alertar = () =>  alert ("Hola evento click");

// const hacerTarea = () => {
//     let tipo = prompt('¿Qué tipo de tarea quieres hacer?');
//     guardarTarea(tipo);
//     return tipo;
// };

// const calcularIva = (numero) => numero * 0.21;

// const btnClik = document.getElementById("btnClik");
// btnClik.addEventListener("click", () => alert("Hola evento click"));


// const personas = [
//     {
//         nombre: "Santiago",
//         edad: 28
//     },
//     {
//         nombre: "Pedro",
//         edad: 25
//     },
//     {
//         nombre: "Luis",
//         edad: 30
//     }
// ];

// const mayorDeEdad = personas.filter((persona) => persona.edad >= 18);

const formularioHTML = document.getElementById("formulario");

const handleSubmit = (evento) => {
    evento.preventDefault();
    document.write(nombre.value, apellido.value);
}

formularioHTML.addEventListener("submit", handleSubmit)