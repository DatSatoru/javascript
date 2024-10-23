## App de gestion de pacientes para un hospital

    - Crear un data.js y cargarlo en html. va tener const pacientes que es un array multidimensional de objetos json. Con 20 pacientes.
                - id: numerico
                - nombre: string
                - apellidos: string
                - edad: number
                - diagnostico: string
                - numeross: string // 'AB23456'
    - Crear las funciones necesaria, y ver donde las cargamos (dependiendo de si trabajan con el html o no), para mostrar por consolas la siguientes peticiones:
                - Sacar los pacientes con un diagnostico concreto ✅
                - Sacar los pacientes que tenga entre 18 y 25 años ✅
                - Sacar los pacientes cuyo numero de la seguridad social acabe en 0 ✅
    - Respetando la maquetacion que os he pasado, teneis que pintar todos los pacientes del hospital
    - En el span que hay en el titulo de la seccion pintar en numero total de pacientes.
    - Crear dentro del header (sin formulario), selector de diagnosticos. Este selector segun cambiemos de diagnostico debe refrescar la pantalla con los pacientes que tenga ese diagnostico. OJO debemos reutilizar las funciones creadas anteriormente.
                1 - Maquetar el selector ✅
                2 - Capturar el selector con javascript ✅
                3 - Crear un evento (listeners) que al cambiar el selector, y capturar por consola el diagnostico seleccionado ✅
                4- Pinte los pacientes con ese diagnostico usando la funcion printAllPatients y filterByDiagnosis y el diagnostico capturado ✅
                5 - Llenar el selector de diagnostico con una listado de patologias ✅

    - Crear un formulario que me permita seleccionar una edad minima y una edad maxima cuando pulsemos el boton del filtrar recogerá eso valores y ejecutará las funcion de filterByAge y printAllPatients ✅
