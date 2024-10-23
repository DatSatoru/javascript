// una tarea {id: 1, title:'texto', prioridad: urgente}
const tareas = []
let id = 1;

// insertar en array

function addTask(list, title, priority) {
    //comprobar si esta duplicada
    const isDuplicate = list.some(task => task.title.toLowerCase() === title.toLowerCase())
    if (!isDuplicate) {
        //push
        const newTarea = { id: id, title: title, priority: priority }
        list.push(newTarea)
        id++;
        return newTarea;
    } else {
        alert('Tarea duplicada');
        return false;
    }
}

// borrar en el array

