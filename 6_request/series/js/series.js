const sectionSeries = document.querySelector('#series')
const popup = document.querySelector('.popup')

function printSeriePopUp(serie, dom) {
    dom.textContent = ""
    const figure = document.createElement('figure')
    const div = document.createElement('div')

    figure.innerHTML = `<img src="${serie.image}">`
    div.innerHTML = `<h3>${serie.title}</h3>
        <ul>
                    <li>Director: ${serie.creator}</li>
                    <li>Duracion: ${serie.dates}</li>
                    <li>Canal: ${serie.channel}</li>
                    <li>Puntuacion: ${serie.rating}</li>
                    </ul>`
    dom.append(figure, div)

}

function cerrarPopUp() {
    popup.style.display = 'none'
    popup.style.opacity = 1
    popup.style.transition = '1s'
}

async function chargePopUp(event) {
    let id = (event.currentTarget.dataset.id)
    let serieSeleccionada = await getSerieByID(id, url, 'GET')

    //hemos pasado una serie al HTML, ahora hay que pintar esa serie.
    //Aqui hay que maquetar en un pop-up
    popup.style.display = 'block'

    setTimeout(() => {
        popup.style.opacity = 1
        popup.style.transition = '1s'

    }, 100)
    const btn = document.querySelector('.cerrar')
    btn.addEventListener('click', cerrarPopUp)

    const sectionMiserie = popup.querySelector('#miserie')
    printSeriePopUp(serieSeleccionada, sectionMiserie)


}
function printOneSerie(serie, dom) {
    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')

    img.src = serie.image
    img.alt = serie.title
    h3.textContent = serie.title
    ul.innerHTML = `<li>Director: ${serie.creator}</li>
                    <li>Duracion: ${serie.dates}</li>
                    <li>Canal: ${serie.channel}</li>
                    <li>Puntuacion: ${serie.rating}</li>`

    figure.appendChild(img)
    article.append(figure, h3, ul)
    dom.appendChild(article)

    // añadir un evento al article. OJO con el burbujeo
    article.dataset.id = serie._id
    article.addEventListener('click', chargePopUp)
}


function printAllSeries(list, dom) {
    list.forEach(serie => printOneSerie(serie, dom))
}

async function init() {
    const series = await getAllSeries(url, 'GET')
    printAllSeries(series, sectionSeries)
}

init()
