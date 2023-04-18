/* Metodo lastIndexOf */

// devuelve el índice del valor que le demos, sea una letra o una palabra
// empieza la busqueda desde el final hasta el principio
// el método lastIndexOf es sensible a mayúsculas.
// si no encuentra la letra el valor sera -1

let codigo1 = "canal".lastIndexOf("a"); // 3
let codigo2 = "Ballena azul".lastIndexOf("a"); // 8
let codigo3 = "Ballena Azul".lastIndexOf("f"); // -1

console.log(codigo1);
console.log(codigo2);
console.log(codigo3);