
function validarDni(dni) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
        'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let letra = dni.at(-1).toUpperCase()
    let numero = Number(dni.slice(0, dni.length - 1))

    if (numero < 0 || numero > 99999999) {
        return 'no valido';
    }

    let posicion = numero % 23;
    let letraArray = letras[posicion];

    return (letra === letraArray) ? 'valido' : 'no valido';

}

console.log(validarDni('12345678z'))