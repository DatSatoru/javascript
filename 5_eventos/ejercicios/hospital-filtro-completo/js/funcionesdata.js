// solo voy a realizar funciones que manejen y devuelvan datos

function filterByDiagnosis(list, diagnostico) {
    /* if(diagnostico !== ""){
        return list.filter(patient => patient.diagnostico.toLowerCase() === diagnostico.toLowerCase())
    }else{
        return list;
    } */
    return list.filter(patient => patient.diagnostico.toLowerCase().includes(diagnostico.toLowerCase()))
}

function filterByAge(list, agemin, agemax) {
    return list.filter(patient => patient.edad >= agemin && patient.edad <= agemax)
}

function filterByNumeroSS(list, numero) {
    return list.filter(patient => patient.numeross.endsWith(String(numero)))
}

console.log(filterByNumeroSS(pacientes, 3))