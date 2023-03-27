/* 4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */

let persona1 = '';
let edad1 = '';
let persona2 = '';
let edad2 = '';
let persona3 = '';
let edad3 = '';

persona1 = prompt('Digite el nombre de la primera persona: ');
edad1 = prompt(`Digite la edad de ${persona1}`);
persona2 = prompt('Digite el nombre de la segunda persona: ');
edad2 = prompt(`Digite la edad de ${persona2}`);
persona3 = prompt('Digite el nombre de la tercera persona: ');
edad3 = prompt(`Digite la edad de ${persona3}`);

if(edad1 > edad2){
    alert(`${persona1} es mayor con una edad de: ${edad1} años`);

    } else if(edad2 > edad3){
        alert(`${persona2} es mayor con una edad de: ${edad2} años`);

    } else{
        alert(`${persona3} es mayor con una edad de: ${edad3} años`);
}