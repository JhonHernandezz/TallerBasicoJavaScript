/* Metodo PI */

// representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

let resultado = calculaCircunferencia(1);  // 6.283185307179586
console.log(resultado);