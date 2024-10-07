//number
var altura = 180; // entero
var precio = 39.90; //racional ojo los racional no son con coma son con punto
var negativos = -2; //negativos

var numero1 = 2;
var numero2 = 12;
var resultado = numero1 + numero2;
console.log(resultado); //14

//undefined
var valor; //undefined
var otroValor = "juan"; //evitamos undefined asignando un valor por defecto.


//boolean (valor de si o no, true o false, en otros lenguajes puede valer 0 y 1). OJO va sin comillas que no es un texto
var estado = true;
var isActive = false;

//string o cadenas de caracteres son datos de texto siempre van entre comillas.
// namespace de variables javascript usa la tecnica camelCase, otro lenguajes como python usan pascal_case
var nombreAlumno = "Juan Antonio";
var apellido = "Perez";
var edad = '42';
var html = '<strong class="rojo">HOLA</strong>';
console.log(edad);
document.write(html);

var nombreCompleto = nombreAlumno + " " + apellido
console.log(nombreCompleto)

//template literal
// var nombreCompletoTemplate = '<p>' + nombreAlumno + ' ' + apellido + '</p>'
var nombreCompletoTemplate = `<p>mi nombre es ${nombreAlumno} y mi apellido es ${apellido}</p>`;
document.write(nombreCompletoTemplate)