/* Metodo matchAll */

// retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, 
// incluyendo grupos de captura.

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]