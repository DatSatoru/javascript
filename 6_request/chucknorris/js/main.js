const divChuck = document.querySelector('.chuck')
const frases = 'https://api.chucknorris.io/jokes/random'
const boton = document.querySelector('.random')

boton.addEventListener('click', cambiarFrase)

function cambiarFrase() {
    cargaDatos(frases, 'GET')

}
function printOnePhrase(frase, dom) {
    dom.textContent = ''
    const p = document.createElement('p')
    p.textContent = `${frase.value}`
    dom.appendChild(p)
}


async function cargaDatos(endpoint, verbo) {
    try {
        let response = await fetch(endpoint, { method: verbo })
        let data = await response.json()
        printOnePhrase(data, divChuck)
    } catch (error) {
        console.log(error)
    }

}

cargaDatos(frases, 'GET')