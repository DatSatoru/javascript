
//operador de asignacion
var numero1 = 4;
var numero2 = 2;

//operador de incremento
numero2++; //3

//operador de decremento
numero2--; //2

//operadores matematicos
var suma = numero1 + numero2;
console.log(suma) //6

var resta = numero1 - numero2;
console.log(resta) //2

var multiplicacion = numero1 * numero2;
console.log(multiplicacion) //8

var division = multiplicacion / numero2;
console.log(division) // 4

var resto = suma % resta;
console.log(resto); //0

var potencia = numero1 ** numero2; // 4 elevado a 2
console.log(potencia) //16

//operadores de comparacion:
var numeroA = prompt('Dime un numero');
var numeroB = Number(prompt('Dime otro numero'));
//conversion de tipos 
numeroA = Number(numeroA)
console.log(numeroA)
console.log(numeroB)

console.log(numeroA <= numeroB); // menor o igual que
console.log(numeroA >= numeroB); // mayor o igual que
console.log(numeroA < numeroB); // menor que
console.log(numeroA > numeroB); // mayor que
console.log(numeroA != numeroB); // distinto
console.log(numeroA == numeroB); // igual

var nombre = "Fran"
var nombre2 = "Juan Antonio"
console.log(nombre2.length > nombre.length)

//case sentitive es sensible a mayuscula y minusculas
var caracter = 's';
var caracter2 = 'S';
console.log(caracter == caracter2) // false


var numero3 = "2";
var numero4 = 2;

//igualdad no estricta
console.log(numero3 == numero4); //true
//igualdad estricta
console.log(numero3 === numero4); //false

console.log(numero3 != numero4); //false;
console.log(numero3 !== numero4); //true


//negacion
var esActivo = true;
console.log(!esActivo); //false


var usuario = prompt('Dime el usuario')
usuario = usuario.toLowerCase()
//para controlar mayusculas y minisculas tenemos las funciones toLowerCase() que pasa un texto minisculas y toUpperCase() que lo pasa mayusculas.
var password = Number(prompt('Dime el password'));

resultado = (usuario === "juanan" && password === 12345);
console.log(resultado);