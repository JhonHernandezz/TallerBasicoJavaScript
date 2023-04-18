/* Metodo localeCompare */

// retorna un número indicando si una cadena de carateres de referencia va antes, 
// después o si es la misma que la cadena dada en orden alfabético.
// La letra "a" va antes que "c" por lo que entrega un valor negativo

let codigo1 = 'a'.localeCompare('c'); // -2 o -1 (o cualquier otro valor negativo)
console.log(codigo1);

// Alfabéticamente la palabra "check" va después que "against" por lo que resulta
// en un valor positivo.
let codigo2 = 'check'.localeCompare('against'); // 2 o 1 (u otro valor positivo)
console.log(codigo2);

// "a" y "a" son equivalentes por lo que resulta en un valor neutral de cero.
let codigo3 = 'a'.localeCompare('a'); // 0
console.log(codigo3);