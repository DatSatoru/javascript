//capturarmos los elementos con los que interactuamos. section y form

const formTodo = document.querySelector('#formTodo');
const sectionTodos = document.querySelector('section.flex');


function selectDelete(event) {
    // cuando event.target tiene html dentro este html puede tambien reaccionar al evento, para solo tener en cuenta el padre usamos en lugar de event.target, event.currentTarget que representa al elemento padre.
    let id = Number(event.currentTarget.dataset.id)
    //con ese id borrarmos del array y cuando este borrado del array borramos del html

    //implemtar deleteTask dentro de funcionesData.js
    let result = deleteTask(id);
    if (result) {
        //borrarmos del interfaz
        let articleBorrar = event.currentTarget.parentNode;
        articleBorrar.parentNode.removeChild(articleBorrar)
    }
}



/*
<article class="urgente">
        <h3>Titulo de la tarea</h3><button><i class="fa-solid fa-trash"></i></button>
</article>
*/

function printOneTask(task, dom) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const button = document.createElement('button')

    //contenido y atributos
    article.classList.add(task.priority)
    h3.textContent = task.title;
    button.innerHTML = '<i class="fa-solid fa-trash"></i>';
    button.dataset.id = task.id
    button.addEventListener('click', selectDelete);

    //tirariamos dentro del article todos los elementos
    article.append(h3, button)
    dom.appendChild(article);
}


function getDataForm(event) {
    event.preventDefault();

    let title = event.target.title.value
    let priority = event.target.priority.value;

    //cuando voy a guardar en el array cuando los dos campos no sean vacios
    if (title !== "" && priority !== "") {
        //guardo en el array
        const newTarea = addTask(tareas, title, priority)
        if (newTarea !== false) {
            printOneTask(newTarea, sectionTodos);
            event.target.reset()
        }
    } else {
        alert('Los campos no pueden ser vacios')
    }
}

formTodo.addEventListener('submit', getDataForm);

