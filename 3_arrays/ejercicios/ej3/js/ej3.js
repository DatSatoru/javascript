// Dado un array de numeros negativos y positivos, devolver el array con numeros que sean negativos convertidos a positivos y viceversa.

//[-1,5,-4,7] => [1,-5,4,-7]
//solo hace falta una funcion 

function invertirNumerosArray(arrayNum) {
    const listaInvertida = [];
    let contador = 0;
    for (let numero of arrayNum) {
        listaInvertida[contador] = numero * (-1)
        contador++;
    }
    console.log(listaInvertida);
}

invertirNumerosArray([-1, 5, -4, 7]) // [1,-5,4,-7]
invertirNumerosArray([2, 2, 2, 2, -6]) // [-2,-2,-2,-2,6]