const API_KEY = 'dd00aa6b89a4eaf22b5fbf601827b192';
const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`;
const URL_IMAGEN = 'https://image.tmdb.org/t/p/w500';
const containerPeliculas = document.getElementById('container-peliculas');

///////////////////// PRACTICA ////////////////////////
let peliculas = [];

const obtenerPeliculas = async () => {
        const respuesta = await fetch(URL_API + '&page=1', {
            method: 'GET',
        });
        const data = await respuesta.json();
        peliculas = data.results;

        mostrarPeliculas();
}

const plantillaPelicula = (peli) => `
    <div class="pelicula">
        <h1>${peli.title}</h1>
        <img src="${URL_IMAGEN + peli.poster_path}" alt="${peli.title}">
        <p>${peli.overview}</p>
    </div>
`;

const mostrarPeliculas = () => {
    for (const peli of peliculas) {
        containerPeliculas.innerHTML += plantillaPelicula(peli);
    }
}

obtenerPeliculas();

    