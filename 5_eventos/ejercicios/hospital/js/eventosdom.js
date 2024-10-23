//solo voy a crear funciones que interactuen con el DOM o que sean de eventos DOM.
//capturamos los elementos con los que interactuamos.
const formAge = document.querySelector('#formAge')
const sectionPatients = document.querySelector('#pacientes .flex');
const selectorDiagnosis = document.querySelector('#diagnosis');
const spanPatients = document.querySelector('#contador span')

/*
<article>
    <h3>Nombre y el apellido del paciente</h3>
    <ul>
        <li>Edad : 34 años</li>
        <li>Seguridad Social: 56789</li>
    </ul>
    <div class="diagnostico">
        Diabetes
    </div>
</article> 
*/

function printOnePatient(patient, dom) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const div = document.createElement('div');

    h3.textContent = `${patient.nombre} ${patient.apellidos}`
    ul.innerHTML = `<li>Edad: ${patient.edad}</li>
                    <li>Seguridad: ${patient.numeross}</li>`

    div.classList.add('diagnostico');
    div.textContent = patient.diagnostico;

    article.append(h3, ul, div);
    dom.appendChild(article);

}

function printAllPatients(list, dom, span) {
    //previamente limpiamos la seccion para mostrar los filtros
    dom.textContent = "";
    span.textContent = list.length;
    if (list.length > 0) {
        list.forEach(patient => printOnePatient(patient, dom
        ));
    } else {
        dom.innerHTML = '<h2>NO HAY RESULTADOS</h2>'
    }
}

//vamos a capturar la edad min y max del formulario
formAge.addEventListener('submit', getDataForm);


function getDataForm(event) {
    event.preventDefault();

    let agemin = Number(event.target.agemin.value);
    let agemax = Number(event.target.agemax.value);

    let patientsResult = filterByAge(pacientes, agemin, agemax);
    printAllPatients(patientsResult, sectionPatients, spanPatients)
    event.target.reset()
}

// vamos a hacer el filtro del selector de diagnostico.

// primero llenar el selector con las options de todas los diagnosticos.
function printOptionSelector(texto, selector) {
    const option = document.createElement('option');
    option.value = texto.toLowerCase()
    option.textContent = texto.toUpperCase();
    selector.appendChild(option);
}


function cargarSelector(list, selector) {
    // el selector se llena con todas las enfermedades de el array aunque este repetidas, tengo que eliminar las enfermedades repetidas
    const arrayDiagnosticos = list.map(item => item.diagnostico);
    const arraySinDuplicados = new Set(arrayDiagnosticos)
    const arrayResult = [...arraySinDuplicados];
    arrayResult.forEach(item => printOptionSelector(item, selector))
}

function getDiagnosis(event) {
    let diagnostico = event.target.value;
    let result = filterByDiagnosis(pacientes, diagnostico)
    printAllPatients(result, sectionPatients, spanPatients)
}


selectorDiagnosis.addEventListener('change', getDiagnosis)


cargarSelector(pacientes, selectorDiagnosis)
printAllPatients(pacientes, sectionPatients, spanPatients)