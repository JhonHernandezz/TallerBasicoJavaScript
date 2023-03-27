/* 8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */

let valor_Lado = 'Lado';
let base = '';
let altura = '';

valor_Lado = prompt(`Digite el valor del lado del cuadrado: `);

let perimetro = 4 * parseInt(valor_Lado);

alert(`El perimetro del cuadrado es de: ${perimetro} cm`);

base = prompt(`Digite la base del rectangulo: `);
altura = prompt(`Digite la altura del rectangulo: `);

let area = parseInt(base) * parseInt(altura);

alert(`El area del rectángulo es de ${area} cm`);