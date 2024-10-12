/*

Como primera funcionalidad quiero que mi programa añada a cada trabajador (json) el sueldo neto anual y el sueldo neto mensual.
    netoAnual = bruto - ((bruto * irpf) / 100)
    netoMensual = netoAnual / pagas

    netoAnual
    netoMensual

*/

// paso 1: como se añaden elementos a un unico objeto json 
// paso 2: funcion que calcule el sueldo neto en funcion de bruto y formula
// paso 3: funcion que calcule el neto mensual

/* const unTrabajador = {
    id: 2,
    nombre: 'Alvaro',
    bruto: 20000,
    irpf: 15,
    pagas: 12,
}

unTrabajador['netoAnual'] = calcularNetoAnual(unTrabajador)
unTrabajador.netoMensual = calcularNetoMensual(unTrabajador)

console.log(unTrabajador) */


function calcularNetoAnual(trabajador) {
    return trabajador.bruto - ((trabajador.bruto * trabajador.irpf) / 100);
}

function calcularNetoMensual(trabajador) {
    return Number((trabajador.netoAnual / trabajador.pagas).toFixed(2))
}

function insertarValoresNetos(listaTrabajadores) {
    listaTrabajadores.forEach(trabajador => {
        trabajador.netoAnual = calcularNetoAnual(trabajador)
        trabajador.netoMensual = calcularNetoMensual(trabajador)
    })
    console.log(listaTrabajadores)
}

insertarValoresNetos(trabajadores)

//Calcular los costes totales en sueldos de la empresa, sea posible calcular los costes total tanto en bruto como neto.

function calcularCostesTotales(listaTrabajadores, clave = 'bruto') {
    const costes = listaTrabajadores.map(trabajador => trabajador[clave]);
    //opcion 1 reduce
    //const total = costes.reduce((acumulado, valor) => acumulado + valor)
    //opcion 2 sin reduce
    let total = 0;
    costes.forEach(coste => total += coste)

    console.log(total)
}

calcularCostesTotales(trabajadores)
calcularCostesTotales(trabajadores, 'netoAnual')
calcularCostesTotales(trabajadores, 'netoMensual')


//calculeis el sueldo maximo de mis trabajadore, neto o en bruto.

function calcularSueldoMaximo(listaTrabajadores, clave = 'bruto') {
    let sueldoMaximo = 0;
    for (let empleado of listaTrabajadores) {
        if (empleado[clave] > sueldoMaximo) {
            sueldoMaximo = empleado[clave]
        }
    }

    console.log('sueldo maximo', sueldoMaximo)
}


function obtenerSueldoMaximo(trabajadores, clave = 'bruto') {
    return trabajadores.reduce((max, trabajador) => trabajador[clave] > max ? trabajador[clave] : max, 0);
}

const sueldoMaximo = obtenerSueldoMaximo(trabajadores);
console.log(`El sueldo máximo en bruto es: ${sueldoMaximo}`);
