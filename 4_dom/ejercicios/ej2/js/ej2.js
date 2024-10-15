// crear un array vacio de productos
// pintar una funcion que me permita meter productos, id, title, price , quantity, active(booleans)
// pintar todos los productos dentro de un secion del dom, que tenga html y css,solo los productos activos
const sectionProductos = document.getElementsByClassName('productos')[0];
const productos = []
let id = 1

const insertProduct = (lista, title, price, quantity, active = true) => {
    const newProduct = {
        id: id,
        title: title,
        price: price,
        quantity: quantity,
        active: active
    }
    lista.push(newProduct)
    id++;
}

insertProduct(productos, 'Leche desnatada', 1, 10);
insertProduct(productos, 'Pan', 0.35, 2, false);
insertProduct(productos, 'Carne', 12.35, 1, false);
insertProduct(productos, 'Cerales', 2.35, 5);


const printOneProduct = function (product, sectionDom) {
    sectionDom.innerHTML += `<article>
    <h3>${product.title}</h3>
    <p>Precio: ${product.price} </p>
    <p>Cantidad: ${product.quantity} </p>
    <p>Disponible: ${product.active} ? 'Disponible' : 'No disponible' </p>
    </article>`
}

const printProducts = function (productList, sectionDom) {
    productList.forEach(producto => printOneProduct(producto, sectionDom));
}


const filterByActive = function (list, status) {
    return list.filter(product => product.active === status)
}



printProducts(filterByActive(productos, true), sectionProductos)