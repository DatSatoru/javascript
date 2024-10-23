const inputNum1 = document.querySelector('#num1');
const inputNum2 = document.querySelector('#num2');
const spanResultado = document.querySelector('#resultado');
const botones = document.querySelectorAll('button');

botones.forEach(boton => boton.addEventListener('click', calcular))

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => {
    return (n2 !== 0) ? n1 / n2 : 'No se puede dividir por cero'
};

function calcular(event) {
    let operacion = event.target.dataset.operacion;
    let resultado = 0;
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        spanResultado.textContent = 'los numeros no son validos';
        return false
    }

    switch (operacion) {
        case "sumar":
            resultado = sumar(num1, num2)
            break;
        case "restar":
            resultado = restar(num1, num2)
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2)
            break;
        case "dividir":
            resultado = dividir(num1, num2)
            break;
        default:
            resultado = 'Operacion no valida';
            break;
    }
    spanResultado.textContent = resultado;
}