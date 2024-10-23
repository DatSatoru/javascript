const url = 'https://jsonplaceholder.typicode.com/users'
const ulUsers = document.querySelector('#users ul')





function printOneUser(user, dom) {
    const li = document.createElement('li')
    li.textContent = `${user.username} - ${user.email} - ${user.address.city} `
    dom.appendChild(li)
}

function printAllUsers(list, dom) {
    list.forEach(user => printOneUser(user, dom))

}

//consultar API de forma moderna  traves de promesas

// OPCION 1. then/catch

/* function cargaDatos(endpoint, verbo) {
    // fetch es una funcion que me permite realiazar petiiones a una API, es una promesa
    fetch(endpoint, { method: verbo })
        .then((response) => {
            //tenemos los datos pero comprimidos como si fueran un zip
            response.json()
                .then(data => {
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        })

        .catch((error) => {
            console.log(error)
        })
} */

// OPCION 2: ASYNC AWAIT

async function cargaDatos(endpoint, verbo) {
    try {
        let response = await fetch(endpoint, { method: verbo })
        let data = await response.json()
        printAllUsers(data, ulUsers)
    } catch (error) {
        console.log(error)
    }

}

cargaDatos(url, 'GET')