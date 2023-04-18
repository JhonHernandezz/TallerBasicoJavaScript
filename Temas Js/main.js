/* Metodo match */

// devuelve todas las ocurrencias de una expresión regular dentro de una cadena.

let codigo1 = 'Para más información, consulte el Capítulo 3.4.5.1';
let re = /consulte el (capítulo \d+(\.\d)*)/i;
let found = codigo1.match(re)

console.log(found);