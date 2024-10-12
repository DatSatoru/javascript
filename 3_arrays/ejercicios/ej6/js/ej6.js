//un array de productos 5, que tengan los siguientes campos.  
// id: number
// nombre: string
// precio: number
// stock: number
// descripcion: string
// precioTotal: function que use el precio y stock

const productos = [
    {
        id: 1,
        nombre: 'Producto A',
        precio: 20,
        stock: 5,
        descripcion: 'Este es el producto A',
        getPrecioTotal: function () {
            return this.precio * this.stock;
        }
    },
    {
        id: 2,
        nombre: 'Producto B',
        precio: 12,
        stock: 30,
        descripcion: 'Este es el producto B',
        getPrecioTotal: function () {
            return this.precio * this.stock;
        }
    },
    {
        id: 3,
        nombre: 'Producto C',
        precio: 2,
        stock: 50,
        descripcion: 'Este es el producto C',
        getPrecioTotal: function () {
            return this.precio * this.stock;
        }
    },
    {
        id: 4,
        nombre: 'Producto D',
        precio: 200,
        stock: 3,
        descripcion: 'Este es el producto D',
        getPrecioTotal: function () {
            return this.precio * this.stock;
        }
    },
    {
        id: 5,
        nombre: 'Producto E',
        precio: 123,
        stock: 12,
        descripcion: 'Este es el producto E',
        getPrecioTotal: function () {
            return this.precio * this.stock;
        }
    },

]


//necesito pintar en html todos los productos pero solo el nombre, descripcion y el precioTotal
function pintarUnProducto(producto) {
    return `<article>
                <h3>${producto.nombre}</h3> 
                <p>${producto.descripcion}</p>
                <p>Precio Total: ${producto.getPrecioTotal()}</p>   
            </article>`
}


function pintarProductos(listaProductos) {
    let html = '<section class="productos">';
    for (let producto of listaProductos) {
        html += pintarUnProducto(producto)
    }
    html += '</section>'
    document.write(html)
}

pintarProductos(productos)