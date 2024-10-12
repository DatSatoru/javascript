/*
Me gustaria separar el listado de alimentos en dos lista en html. Los listados seran de alimentos saludables y no saludables.
La condicion de que sean saludables es que tenga menos de 15 calorias.
Debo pintar los dos listados, los alimentos saludables iran en color verde los no saludables en color rojo.

SEPARAR RESPONSABILIDADES y NO REPETIR ACCIONES.

*/

function filtrarSaludables(listaAlimentos, calorias) {
    return listaAlimentos.filter(alimento => alimento.calorias < calorias)
}

function filtrarNoSaludables(listaAlimentos, calorias) {
    return listaAlimentos.filter(alimento => alimento.calorias >= calorias)
}

let alimentosSaludables = filtrarSaludables(alimentos, 30)
let alimentosNoSaludables = filtrarNoSaludables(alimentos, 30)

function getColorAndTitle(tipo) {
    let arrayTipos = [{ titulo: 'Todos los alimentos', color: 'blue' }, { titulo: 'Saludables', color: 'green' }, { titulo: 'No Saludables', color: 'red' }]
    return arrayTipos[tipo]
}

function pintarUnAlimento(alimento, color) {
    return `<li>${alimento.nombre} - ${alimento.categoria} - <span style="color: ${color}">${alimento.calorias}</span></li>`
}

function pintarAlimentos(listaAlimentos, tipo = 0) {
    let html = `<h3>${getColorAndTitle(tipo).titulo}</h3><ul>`
    listaAlimentos.forEach(alimento => html += pintarUnAlimento(alimento, getColorAndTitle(tipo).color))
    html += '</ul>'
    document.write(html)
}

pintarAlimentos(alimentosSaludables, 1)
pintarAlimentos(alimentosNoSaludables, 2)
pintarAlimentos(alimentos)

