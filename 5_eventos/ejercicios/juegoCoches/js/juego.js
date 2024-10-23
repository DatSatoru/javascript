const ferrari = document.querySelector('#ferrari');
const h1 = document.querySelector('h1');
let avanceFerrari = 0;
let avanceLambo = 0;
let avancePorche = 0;
let nitro = 3;
const finalMeta = 680;

document.addEventListener('keypress', capturarTeclas);

function pararJuego(nombre) {
    clearInterval(intervaloLambo)
    clearInterval(intervaloPorche)
    document.removeEventListener('keypress', capturarTeclas)
    h1.textContent = `Ha ganado ${nombre}`
}

function acelerarFerrari(velocidad, coche, nombre) {
    avanceFerrari += velocidad;
    coche.style.marginLeft = avanceFerrari + 'px'
    if (avanceFerrari >= finalMeta) {
        pararJuego(nombre)
    }
}

function acelerarLambo(velocidad, coche, nombre) {
    avanceLambo += velocidad;
    coche.style.marginLeft = avanceLambo + 'px'
    if (avanceLambo >= finalMeta) {
        pararJuego(nombre)
    }
}

function acelerarPorche(velocidad, coche, nombre) {
    avancePorche += velocidad;
    coche.style.marginLeft = avancePorche + 'px'
    if (avancePorche >= finalMeta) {
        pararJuego(nombre)
    }
}

// solucion presentada para tener una unica funcion de mover coche y no tener que tener funciones separadas.
/* function acelerarCoche(velocidad, coche, nombre) {
    let avance = 0;
    let obj = {
        'Ferrari': avanceFerrari,
        'Lambo': avanceLambo,
        'Porche': avancePorche
    };

    avance = obj[nombre] + velocidad;

    obj[nombre] = avance;

    avanceFerrari = obj['Ferrari'];
    avanceLambo = obj['Lambo'];
    avancePorche = obj['Porche'];

    coche.style.marginLeft = avance + 'px'

    if (avance >= finalMeta) {
        document.removeEventListener('keypress', capturarTeclas)
        clearInterval(intervaloLambo)
        clearInterval(intervaloPorche)
        h1.textContent = `Ha ganado ${nombre}`
    }
} */

function capturarTeclas(event) {
    //tenemos que diferenciar entre space y la n
    switch (event.code) {
        case 'Space':
            // acelerar ferrari
            acelerarFerrari(40, ferrari, 'Ferrari')
            break;

        case 'KeyN':
            //oxido nitroso
            if (nitro > 0) {
                acelerarFerrari(80, ferrari, 'Ferrari')
                nitro--;
            }
            break;
    }
}


//lambirguini, es autonomo y avanza a velocidad constante, es decir siempre la misma velocidad
const lambo = document.querySelector('#lamborghini');

const intervaloLambo = setInterval(() => {
    acelerarLambo(45, lambo, 'Lambo')
}, 100)


const intervaloPorche = setInterval(() => {
    let velocidad = Math.random() * 70;
    acelerarPorche(velocidad, porche, 'Porche')
}, 100)

// como calcular una funcion aletaria entre dos numeros cualesquiera
// https://desarrolloweb.com/articulos/763.php