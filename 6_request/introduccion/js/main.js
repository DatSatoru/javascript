const url = 'https://jsonplaceholder.typicode.com/users'
const ulUsers = document.querySelector('#users ul')

//metodo amazon

const pedido = new XMLHttpRequest()

// abrir amazon y bucar lo que necesito

pedido.open('GET', url);


//metodo CRUD para consultar una API
//GET - obtener informacion
// POST - enviar informacion
// PUT/PATH - actualizar informacion
// DELETE - borrar informacion


// hacer el pedido

pedido.send()

// estariamos atentos y pendientes a cualquier notificacion del pedido. Listener

//pedido.addEventListener('readystatechange', cargarDatos)
pedido.addEventListener('load', cargarDatos)

function printOneUser(user, dom) {
    const li = document.createElement('li')
    li.textContent = `${user.username} - ${user.email} - ${user.address.city} `
    dom.appendChild(li)
}

function printAllUsers(list, dom) {
    list.forEach(user => printOneUser(user, dom))

}

function cargarDatos(event) {
    if (event.target.status === 200) {
        // tengo el paquete y mantengo la conexion
        const data = JSON.parse(event.target.responseText)
        console.log(data)
        printAllUsers(data, ulUsers)

    } else {
        alert('La pagina se ha caido')
    }
}

