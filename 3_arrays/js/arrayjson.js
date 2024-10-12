const estudiantes = [
    {
        nombre: 'Rodrigo',
        apellidos: 'Garcia',
        edad: 23,
        estudios: 'agronomos'
    },
    {
        nombre: 'Laura',
        apellidos: 'Perez',
        edad: 33,
        estudios: 'informatica'
    },
    {
        nombre: 'Juan',
        apellidos: 'Alcalde',
        edad: 27,
        estudios: 'abogado'
    },
    {
        nombre: 'Marina',
        apellidos: 'Cáceres',
        edad: 40,
        estudios: 'Direccion de empresas'
    },
]

console.log(estudiantes)

//sacar el alumno entre en la posicion 3

console.log(estudiantes[3]) // Marina

//Sacar solo el nombre
console.log(estudiantes[3].nombre)
console.log(estudiantes[3]['nombre'])

// sacarias por pantalla el nombre el apellido de todo los estudiantes

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre + " " + estudiantes[i]['apellidos'])
}

for (let estudiante of estudiantes) {
    console.log(estudiante['nombre'], estudiante.apellidos)
}

//representa toda informacion del cada estudiante en article

// - Funcion que reciba por parametro un estudiantes (json) y retorne un html con article que os propongo
// let estudiante = { nombre: 'Rodrigo', apellidos: 'García', edad: 23, estudios: 'agrónomos' }
// pintarEstudiante(estudiante)
/*
    <article>
        <h3>Rodrigo Garcia</h3>
        <p>Edad: 23</p>
        <p>Estudios: agronomos</p>    
    </article>

*/

function pintarUnEstudiante(estudiante) {
    return `<article>
        <h3>${estudiante.nombre} ${estudiante.apellidos}</h3>
        <p>Edad: ${estudiante.edad}</p>
        <p>Estudios: ${estudiante.estudios}</p>    
    </article>`
}

function pintarTodosEstudiantes(lista) {
    let html = '<section>'
    for (let estudiante of lista) {
        html += pintarUnEstudiante(estudiante)
    }
    html += '</section>'
    document.write(html)
}

//pintarTodosEstudiantes(estudiantes)

//Quiero pintar solo aquellos estudiantes menores de 25 años.

function filtrarEstudiantesPorEdad(lista, edadLimite) {
    const listaFiltrada = [];
    contador = 0;
    for (let estudiante of lista) {
        if (estudiante.edad <= edadLimite) {
            listaFiltrada[contador] = estudiante;
            contador++;
        }
    }
    return listaFiltrada;
}

// const listaMenores40 = 
// pintarTodosEstudiantes(listaMenores40)

pintarTodosEstudiantes(filtrarEstudiantesPorEdad(estudiantes, 40))

