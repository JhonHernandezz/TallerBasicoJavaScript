/* 1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, 
si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, 
de lo contrario un mensaje que diga "becado" */

let nota1 = prompt("Digite la nota #1: ");

if(nota1 >= 0 && nota1 <=10){

    let nota2 = prompt("Digite la nota #2: ");
    let nota3 = prompt("Digite la nota #3: ");

    let resultado = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

    if(resultado >=0 && resultado <= 3.9){
        alert(`Su nota es de: ${resultado.toFixed(1)} por favor "Estudie" más`)

    } else{
        alert(`Su nota es de: ${resultado.toFixed(1)} esta "Becado" por esta institución`)
    } 

} else{
    alert("Ingrese una calificación correcta");
}