/* 5. Construir el algoritmo que lea por teclado dos números
si el primero es mayor al segundo informar su suma y diferencia
en caso contrario
informar el producto y la división del primero respecto al segundo. */
 
let num1 = '';
let num2 = '';

num1 = prompt(`Digite el número 1: `);
num2 = prompt(`Digite el número 2: `);

if(num1 > num2){
    let suma = parseInt(num1) + parseInt(num2);
    let resta = parseInt(num1) - parseInt(num2);
    console.log(`La suma del número ${num1} y el número ${num2} es igual a: ${suma} \nY la diferencia es de: ${resta}`);
} else{
    let division = parseInt(num1) / parseInt(num2);
    let multiplicacion = parseInt(num1) * parseInt(num2);
    console.log(`El producto del número ${num1} y el número ${num2} es: ${multiplicacion} \nY la división del número ${num1} y el número ${num2} es igual a: ${division.toFixed(2)}`);
}