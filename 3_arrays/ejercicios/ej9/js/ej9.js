// Dada una frase cualquiera, darle la vuelta a todas las palabras.
// Tony Stark -> Stark Tony

//opcion 1

const invertirFrase1 = frase => {
    //convertir en array una frase. split(" ")
    const array = frase.split(" ");
    array.reverse();
    const fraseInvertida = array.join(" ")
    return fraseInvertida
}


//opcion 2
const invertirFrase2 = frase => frase.split(" ").reverse().join(" ");
console.log(invertirFrase2('Tony Stark'))