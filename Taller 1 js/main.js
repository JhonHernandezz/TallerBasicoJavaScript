/* 3. Construir el algoritmo para determinar el voltaje de un
circuito 

resistencia  
intensidad de corriente. */

let corriente = prompt(`Digite la intensidad de corriente del circuito: `);
let resistencia = prompt(`Digite la resistencia del circuito: `);

let resultado = parseInt(corriente) * parseInt(resistencia);

    alert(`El voltaje del circuito es de: ${resultado} voltios`);