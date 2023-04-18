/* Metodo repeat */

// devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.

let repetir1 = 'abc'.repeat(1);    // 'abc'
let repetir2 = 'abc'.repeat(2);    // 'abcabc'
let repetir3 = 'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)

console.log(repetir1);
console.log(repetir2);
console.log(repetir3);