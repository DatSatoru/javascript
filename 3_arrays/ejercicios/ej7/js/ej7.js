// Crear una array de nombres de diferentes longitudes. Dividir el array de nombres creados en diferentes array cuyos elementos tengan la misma longitud 

/*
    ej: ['Ana', 'Pepe', 'Raul', 'Juan', 'Rocio', 'Juan Antonio', 'David' ]
    Resultado: 
         let arrayLng3  =   ['Ana']
         let arrayLng4  =   ['Pepe', 'Raul', 'Juan']
         let arrayLng5  =   ['Rocio', 'David']


        para saber hasta donde teneis que llegar debeis saber el nombre de longitud maxima. 
        1 - cual es la longitud maxima de los nombres
        2 - sacar todos los nombres desde 1 hasta la maxima longitudes
        3 - mostrar solo los listados de los elementos que tengan longitud.
*/
const arrayNombres = ['Ana', 'Pepe', 'Rocio', 'Juan Antonio', 'Raul', 'David', 'Camila', 'Juan', 'Jose Angel']

function getMaxLong(listaNombres) {
    let longMax = 0;
    for (let nombre of listaNombres) {
        if (nombre.length > longMax) {
            longMax = nombre.length
        }
    }
    return longMax
}

function getListNameByLong(lista, long) {
    const listaFiltrada = [];
    contador = 0;
    for (let nombre of lista) {
        if (nombre.length === long) {
            listaFiltrada[contador] = nombre;
            contador++;
        }
    }
    return listaFiltrada;
}

for (let i = 1; i <= getMaxLong(arrayNombres); i++) {
    const lista = getListNameByLong(arrayNombres, i)
    if (lista.length !== 0) {
        console.log(lista)
    }
}