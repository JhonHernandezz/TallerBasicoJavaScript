/* Metodo trim */

// elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).

let orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Otro ejemplo de .trim() eliminando el espacio en blanco sólo de un lado.
orig = 'foo    ';
console.log(orig.trim()); // 'foo'