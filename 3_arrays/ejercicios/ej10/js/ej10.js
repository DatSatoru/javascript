//opcion 1 quitarTildes easy

/* 
function quitarTildes(texto) {
    let textoSinTildes = texto.replaceAll('á', 'a');
    textoSinTildes = textoSinTildes.replaceAll('é', 'e')
    textoSinTildes = textoSinTildes.replaceAll('í', 'i')
    textoSinTildes = textoSinTildes.replaceAll('ó', 'o')
    textoSinTildes = textoSinTildes.replaceAll('ú', 'u')

    return textoSinTildes;
}
*/

function quitarTildes(texto) {
    let textoSinTildes = texto.toLowerCase();
    let array = [{ con: 'á', sin: 'a' }, { con: 'é', sin: 'e' }, { con: 'í', sin: 'i' }, { con: 'ó', sin: 'o' }, { con: 'ú', sin: 'u' },]

    array.forEach((item) => {
        textoSinTildes = textoSinTildes.replaceAll(item['con'], item['sin']);
    })

    return textoSinTildes;
}


function esPalindromo(texto) {
    //convertir el texto a minuscula
    let minusculas = texto.toLowerCase();
    let sinEspacios = minusculas.replaceAll(" ", "");
    let sinAcentos = quitarTildes(sinEspacios);
    let array = sinAcentos.split("");
    let arrayInvertido = array.toReversed();
    let textoInvertido = arrayInvertido.join("");
    return (textoInvertido === sinAcentos) ? 'Es un palindromo' : 'No es un palindromo'
}

console.log(esPalindromo('La ruta nos aportó otro paso natural'));