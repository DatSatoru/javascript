const ulCorredores = document.querySelector('.corredores');

function deleteDriver(event) {
    let id = Number(event.target.dataset.id);
    //primero borramos del array - splice(posicion, cantidad)
    let posicion = f1Drivers.findIndex(driver => driver.id === id);

    if (posicion !== -1) {
        f1Drivers.splice(posicion, 1);
        liBorrar = event.target.parentNode;
        liBorrar.parentNode.removeChild(liBorrar)
    }
}



//<li>Alonso - Aston Martin - <button>Borrar</button></li> 
function printOneDriver(driver, dom) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.textContent = `${driver.name} - ${driver.team} - `;
    button.textContent = 'Borrar';
    button.dataset.id = driver.id;
    button.addEventListener('click', deleteDriver)
    li.appendChild(button);
    dom.appendChild(li);
}

function printAllDrivers(list, dom) {
    dom.textContent = "";
    list.forEach(driver => printOneDriver(driver, dom))
}

printAllDrivers(f1Drivers, ulCorredores)