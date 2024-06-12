const API_KEY = 'dd00aa6b89a4eaf22b5fbf601827b192';
const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`;

const respuesta = fetch(URL_API + '&page=1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
