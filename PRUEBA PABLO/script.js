const materiasCursadas = [
    {
        id: 1,
        nombre: "Matematicas",
        modulo: 4,
        profesor: "Pablo",
    },
    {
        id: 2,
        nombre: "Ingles",
        modulo: 3,
        profesor: "Maria",
    },
    {
        id: 3,
        nombre: "Ciencias",
        modulo: 5,
        profesor: "Pedro",
    },
];

const materiasCursadasString = JSON.stringify(materiasCursadas);
localStorage.setItem("materiasCursadas", materiasCursadasString);

function obtenerMateriasCursadas() {
    let materias = localStorage.getItem("materiasCursadas");
    if (materias !== null) {
        let materiasParseadas = JSON.parse(materias);
        return materiasParseadas;
    } else {
        return [];
    }
}
console.log(obtenerMateriasCursadas());

let nuevaMateria = {
    id: 4,
    nombre: "Fisica",
    modulo: 6,
    profesor: "Luis",
};

function agregarMateria(nuevaMateria) {
    let materias = obtenerMateriasCursadas();
    materias.push(nuevaMateria);
    localStorage.setItem("materiasCursadas", JSON.stringify(materias));

}
agregarMateria(nuevaMateria);
console.log(obtenerMateriasCursadas());

const container = document.getElementById("materias");
materiasCursadas.forEach((materia) => {
    container.innerHTML += 
    `<div>
        <h3>${materia.nombre}</h3>
        <p> id: ${materia.id}</p>
        <p>Modulo: ${materia.modulo}</p>
        <p>Profesor: ${materia.profesor}</p>
        <hr></div>`})