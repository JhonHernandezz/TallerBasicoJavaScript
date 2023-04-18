/* Metodo codePointAt */

// devuelve un entero no negativo que equivale al valor Unicode code point del carácter.

let codigo1 = 'ABC'.codePointAt(1);          // 66
let codigo2 = '\uD800\uDC00'.codePointAt(0); // 65536
let codigo3 = 'XYZ'.codePointAt(52); // undefined

console.log(codigo1)
console.log(codigo2)
console.log(codigo3)