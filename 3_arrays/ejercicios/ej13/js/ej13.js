
function crearInmueble(titulo, ubicacion, precio, listadoCasas) {
    const nuevoInmueble = {
        'titulo': titulo,
        'ubicacion': ubicacion,
        'precio': precio
    }
    //TODO: comprobacion de si ya existe ese inmueble
    listadoCasas.push(nuevoInmueble);
}

crearInmueble('Atico en madrid', 'Paseo de Rosales, Madrid', 400000, datos)


function filtrarPorUbicacion(ubicacion, listadoCasas) {
    return listadoCasas.filter(inmueble => inmueble.ubicacion.toLowerCase().includes(ubicacion.toLowerCase()))
}

console.log(filtrarPorUbicacion('andalucia', datos))

function pintarUnaCasa(inmueble) {
    return `<article>
            <h3>${inmueble.titulo}</h3>
            <p>Ubicacion: ${inmueble.ubicacion}</p>
            <p>Precio: ${inmueble.precio}</p>    
    </article>`;
}

function pintarInmuebles(listadoCasas) {
    let html = '<section>'
    listadoCasas.forEach(casa => html += pintarUnaCasa(casa))
    html += '</section>'
    document.write(html)
}

pintarInmuebles(datos)
