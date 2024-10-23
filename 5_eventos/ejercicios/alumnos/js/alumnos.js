//pintar el listado de alumnos en ul correspondiente
// que el selector de notas refresque el listado con la lista de alumnos seleccionado. Si seleccion "selecciona un opcion" deben aparecer todos.

//funciones
//  - printAllStudents, printOneStudents, filterByQualifications, evento.
const ulList = document.querySelector('.list');

//<li>Juan Antonio - edad:42 - <span class="aprobado">nota: 10</span></li> 
function printOneStudent(student, dom) {
    const li = document.createElement('li'); //<li></li>
    const span = document.createElement('span'); //<span></span>
    span.classList.add((student.notamedia >= 5) ? 'aprobado' : 'suspenso'); // <span class="aprobado"></span>
    span.textContent = `nota: ${student.notamedia}` // <span class="suspenso">nota: 3</span>
    li.textContent = `${student.nombre} - edad: ${student.edad} - `
    li.appendChild(span); // <li>Juan Antonio - edad: 42 - <span class="suspenso">nota: 3</span></li>

    dom.appendChild(li);
}


function printAllStudents(arrayStudents, dom) {
    //siempre que tenga mi aplicacion algun filtro que use la funcion de pintar todos necesito que esa funcion limpie el contenedor.
    dom.textContent = "";
    arrayStudents.forEach(student => printOneStudent(student, dom));
}

function filterByQualifications(list, notamin, notamax) {
    return list.filter(student => student.notamedia >= notamin && student.notamedia <= notamax)
}

// evento necesito capturar el elemento que lanza evento que en este caso es el selector con un evento de change
const selectNotas = document.querySelector('#notas')

selectNotas.addEventListener('change', chargeQualifications);

function chargeQualifications(event) {

    const casos = {
        'todos': [0, 10],
        'aprobado': [5, 10],
        'suspenso': [0, 4.999]
    }

    let notamin = casos[event.target.value][0]
    let notamax = casos[event.target.value][1]
    const listaFiltrada = filterByQualifications(alumnos, notamin, notamax)
    printAllStudents(listaFiltrada, ulList)




    /* switch (event.target.value) {
        case 'aprobado':
            const listaAprobados = filterByQualifications(alumnos, 5, 10);
            printAllStudents(listaAprobados, ulList)
            break;

        case 'suspenso':
            const listaSuspensos = filterByQualifications(alumnos, 0, 4.99999);
            printAllStudents(listaSuspensos, ulList)
            break;

        default:
            printAllStudents(alumnos, ulList);
            break;
    } */
}









printAllStudents(alumnos, ulList)





