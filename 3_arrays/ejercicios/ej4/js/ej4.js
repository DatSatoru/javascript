//Dada una frase cualquiera, En un lugar la mancha, pedir una letra del abcedario por ejemplo la a y decirme cuanta veces se repite dentro del cadena de caracteres. Da igual mayuscula que minusculas.

let frase = prompt('Dime un frase: ')
let letra = prompt('Dime una letra: ')

function contarLetras(texto, letraBuscar) {
    let contador = 0;
    for (let letra of texto) {
        contador = (letra.toLowerCase() === letraBuscar.toLowerCase()) ? contador + 1 : contador
    }
    console.log(contador)
}

contarLetras(frase, letra); //2
