//Crear un array con 10 peliculas, id, titulo, director, año, recaudación (en millones) y duración (en minutos).
const peliculas = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010, money: 829.9, time: 148 },
    { id: 2, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, money: 463.5, time: 136 },
    { id: 3, title: "Interstellar", director: "Christopher Nolan", year: 2014, money: 677.5, time: 169 },
    { id: 4, title: "The Godfather", director: "Francis Ford Coppola", year: 1972, money: 246.1, time: 175 },
    { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, money: 213.9, time: 154 },
    { id: 6, title: "The Dark Knight", director: "Christopher Nolan", year: 2008, money: 1004.9, time: 152 },
    { id: 7, title: "Fight Club", director: "David Fincher", year: 1999, money: 101.2, time: 139 },
    { id: 8, title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, money: 678.2, time: 142 },
    { id: 9, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, money: 58.3, time: 142 },
    { id: 10, title: "Gladiator", director: "Ridley Scott", year: 2000, money: 460.5, time: 155 }
];


//Crear una función que reciba el array de peliculas y devuelva un array con las peliculas que tengan una recaudación mayor a 500 millones.

function filterFilmByMoney(filmsList, moneyMin, moneyMax = 3000) {
    return filmsList.filter(film => film.money >= moneyMin && film.money <= moneyMax)
}

const peliculasDeMas500millones = filterFilmByMoney(peliculas, 500)
console.log(peliculasDeMas500millones)

//Crear una función que reciba el array de peliculas y devuelva un array con las peliculas que tengan una duración mayor a 150 minutos.
function filterFilmByTime(filmList, time) {
    return filmList.filter(film => film.time > time)
}
const peliculasDeMas150min = filterFilmByTime(peliculas, 150);
//console.log(peliculasDeMas150min);

//Crear una funcion que reciba el array de peliculas y devuelva la primera pelicula del director Christopher Nolan.
function filterByDirector(filmList, director) {
    return filmList.find(film => film.director.toLowerCase() === director.toLowerCase())
}

const primeraPeliculaDirectorScott = filterByDirector(peliculas, 'ridley scott');
console.log(primeraPeliculaDirectorScott)



