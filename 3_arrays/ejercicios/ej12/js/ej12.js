let textoPrueba = 'hola como estas';


function quitarUnaVocal(frase, vocal) {
    let fraseFinal = ""
    for (let letra of frase) {
        if (letra !== vocal) {
            fraseFinal += letra;
        }
    }
    return fraseFinal;
}



function quitarVocales(texto) {
    texto = texto.toLowerCase()
    arrayVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    // arrayVocales.forEach(vocal => texto = texto.replaceAll(vocal, ""));
    arrayVocales.forEach(vocal => texto = quitarUnaVocal(texto, vocal))

    return texto.split(" ").join("");

}

console.log(quitarVocales(textoPrueba))