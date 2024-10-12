## EJERCICIO 17

Un error informático a desordenado nuestro inventario de productos. Debes ayudar a recolocar todos los elementos en su 
sitio. 
En la base de datos se guardan los nombre de los productos que tenemos en el almacen el problema es que un error informático a modificado los nombres de la los productos añadiendo caracteres raros dentro de los nombres. El objetivo es encontrar y eliminar los elementos raros y devolver la lista con los productos corregidos pero solo de aquellos que tenemos stock el resto eliminar 
Tu base de datos es esta:

````
const base_datos = [ 
    { 
        id: 1, 
        name: "ma+nz*anas", 
        stock: true 
    }, 
    { 
        id: 2, 
        name: "a((na((car**dos", 
        stock: false 
    }, 
    { 
        id: 3, 
        name: "a$$$$g**uac&ate", 
        stock: true 
    }, 
    { 
        id: 4, 
        name: "p$$***iña$", 
        stock: true 
    }, 
    { 
        id: 5, 
        name: "c&ar$$n***e", 
        stock: false 
    }, 
    { 
        id: 6, 
        name: "f*r*ambues%sa$s", 
        stock: true 
    }, 
    { 
        id: 7, 
        name: "c&e&&re&&eal&es", 
        stock: false 
    }, 
    { 
        id: 8, 
        name: "q &&**ues***so", 
        stock: true 
    }, 
    { 
        id: 9, 
        name: "p$oll$o$", 
        stock: false 
    }, 
    { 
        id: 10, 
        name: "a%%%g**u++ua", 
        stock: true 
    }, 
    { 
        id: 11, 
        name: "ve*r*du*r*as&&", 
        stock: true 
    } 
] 
`````


## EJERCICIO 18

A partir del siguiente array que se proporciona: const valores = [true, 5, false, "hola", "adios", 2];  
1. Determinar cual de los dos elementos de texto es mayor  
2. Determinar el resultado de las cinco operaciones matemáticas (SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN Y PRODUCTO) realizadas con los elementos numéricos 


## EJERCICIO 19

Realizar programa donde vamos a trabajar con los datos de vuelos, cada vuelo tendrá los siguiente datos origen,destino. 
    a) Añadir informaciones: hora salida y hora llegada al 
    array de datos 
    b) Añadir datos hasta llegar a tener al menos 10 
    “ vuelos” 
    c) Completar programa, con las funciones necesarias, 
    para que el usuario vea en pantalla: 
       1) Ver todos los vuelos 
       2) Ver vuelos de un destino determinado. 
       3) Ver vuelos que llegan más tarde que una hora determinada (números enteros)