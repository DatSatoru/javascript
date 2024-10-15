//Pintar todas las frases celebres con todos sus datos pero solo las que tengan marcado Publicado

const selectorDom = document.querySelector('.frases');

const filtrarPublicados = function (listaFrases, status) {
    return listaFrases.filter(frase => frase.publicada === status)
}

const pintarUnaFrase = function (sentence, domS) {
    domS.innerHTML += `<p>"${sentence.frase}" - Autor: ${sentence.autor}</p>`

}
const pintarTodasFrases = function (listaFrases, domS) {
    listaFrases.forEach(frase => pintarUnaFrase(frase, domS))
}

pintarTodasFrases(filtrarPublicados(frases, true), selectorDom)
