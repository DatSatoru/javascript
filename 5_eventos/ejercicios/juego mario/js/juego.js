const escenario = document.querySelector('#escenario')
const mario = document.querySelector('#mario img')
let avanceEscenario = 0

function moverEscenario() {
    avanceEscenario -= 10
    escenario.style.backgroundPosition = avanceEscenario + 'px'
}


function saltar(event) {
    if (event.code === 'Space') {
        mario.src = './images/salto.gif';
        mario.style.transform = 'translateY(-100px)'

    }
    setTimeout(() => {
        mario.src = './images/mario.gif';
        mario.style.transform = 'translateY(0)'
    }, 200)
}

/* function correr(event) {
    if (event.code === 'Space') {
        mario.src = './images/mario.gif';
        mario.style.transform = 'translateY(0)'

    }
} */


// document.addEventListener('keyup', correr)
document.addEventListener('keypress', saltar)

let tiempoIntervalo = Math.round(Math.random() * (5000 - 1000) + 1000);
let insertarSeta = setInterval(salirSeta, tiempoIntervalo)

function salirSeta() {
    const seta = document.createElement('figure');
    seta.classList.add('seta')
    let avanceSeta = 0;
    seta.style.right = '-100px'
    escenario.appendChild(seta)
    const intervaloSeta = setInterval(() => {
        if (avanceSeta <= 850) {

            avanceSeta += 15;
            seta.style.right = avanceSeta + 'px'

        } else {
            seta.remove()
            clearInterval(intervaloSeta)
        }
    }, 100)

    tiempoIntervalo = Math.round(Math.random() * (5000 - 1000) + 1000);
    clearInterval(insertarSeta)
    insertarSeta = setInterval(salirSeta, tiempoIntervalo)
}



function init() {

    let intervaloEscenario = setInterval(moverEscenario, 100)
}


init()