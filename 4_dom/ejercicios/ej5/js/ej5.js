// pintar el array de poligonos dentro de la seccion poligonos 


// localizar la seccion donde vamos a pintar
const poligonosDom = document.querySelector('.poligonos');

const applyDivStyle = function (domSelector, estilos) {
    for (let clave in estilos) {
        domSelector.style[clave] = estilos[clave]
    }
}

const pintarUnPoligono = function (poligono, domSelector) {
    domSelector.innerHTML += `<div class="figure"></div>`;
    const div = document.querySelector('div:last-child');
    applyDivStyle(div, poligono)
}

const pintarPoligonos = function (listaPoligonos, domSelector) {

    listaPoligonos.forEach(poligono => pintarUnPoligono(poligono, domSelector))
}

pintarPoligonos(poligonos, poligonosDom)


