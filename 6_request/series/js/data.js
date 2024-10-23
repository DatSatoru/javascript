const url = 'https://peticiones.online/api/series'



// esto en Angular se llama Servicio. Un fichero js que solo extrae datos de la BBDD/API y los pasa a la vista
const getAllSeries = async function (endpoint, verb) {
    try {
        const response = await fetch(endpoint, { method: verb })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

const getSerieByID = async function (id, endpoint, verb = 'GET') {
    try {
        const urlResult = endpoint + '/' + id
        const response = await fetch(urlResult, { method: verb })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }

}