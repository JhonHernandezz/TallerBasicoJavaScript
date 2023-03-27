/* 10. Desarrolle un programa en javascript cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

let suma = 0;
let contador = 0;
let maximo = Number.NEGATIVE_INFINITY;
let minimo = Number.POSITIVE_INFINITY;

while(true){
    let valor = parseInt(prompt("Ingrese un número:"));
        if(valor === 0){
            break;
        }
    suma += valor;
    contador++;
        if(valor > maximo){
            maximo = valor;
        }
        if(valor < minimo){
            minimo = valor;
        }
}

let promedio = suma / contador;

console.log("La sumatoria de los valores es:", suma);
console.log("El valor del promedio es:", promedio);
console.log("Cantidad de valores ingresados:", contador);
console.log("El valor máximo ingresado es:", maximo);
console.log("El valor mínimo ingresado es:", minimo);