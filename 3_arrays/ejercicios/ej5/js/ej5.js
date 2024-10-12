//hacer un programa que me pida 10 numeros por pantalla, o diez aleatorios, quiero que me pinte en html (el tres listado ul), el listado de numeros pedidos, un listado de numeros pares, un listado de numeros impares.

//[1,2,3,4,5,6,7,8,9,10]
//[2,4,6,8,10]
//[1,3,5,7,9]

//llenarArray(), filtrarPar(), filtrarImpar(), pintarLista()
// 1 - llenarArray()

const llenarArray = (cantidad) => {
    arrayNumeros = []
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(Math.random() * 101)
        arrayNumeros[i] = numero;
    }
    return arrayNumeros
}

console.log(llenarArray(10))

//2 - filtrarPar

function numerosPares(listaNumeros) {
    const listaPares = [];
    contador = 0;
    for (let numero of listaNumeros) {
        if (numero % 2 === 0) {
            listaPares[contador] = numero;
            contador++
        }
    }
    return listaPares;
}

// 3 - filtrarImpares


function numerosImpares(listaNumeros) {
    const listaImpares = [];
    contador = 0;
    for (let numero of listaNumeros) {
        if (numero % 2 !== 0) {
            listaImpares[contador] = numero;
            contador++
        }
    }
    return listaImpares;
}

const pintarLista = function (lista, titulo = "Todos los numeros") {
    let ul = `<h3>${titulo}</h3><ul>`
    for (let numero of lista) {
        ul += `<li>${numero}</li>`
    }
    ul += '</ul>'
    document.write(ul)
}

const listaFinal = llenarArray(10);
pintarLista(listaFinal)
pintarLista(numerosPares(listaFinal), 'Todos los pares')
pintarLista(numerosImpares(listaFinal), 'Todos los impares')