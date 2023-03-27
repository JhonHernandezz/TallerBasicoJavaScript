/* 6. Construir el algoritmo en Javascript con n cantidad de estudiantes
que lea el nombre, el sexo y la nota definitiva 

halle al estudiante con la mayor nota 
y al estudiante con la menor nota 
cuantos eran hombres y cuantos mujeres. */

let nota = '';
let estudiante = '';
let sexo = '';

let masculino = 0;
let femenimo = 0;

let calificacionMayor = 0;
let calificacionMenor = 100;

let nombreCalificacionMayor = "";
let nombreCalificacionMenor = "";

let cantidad = prompt("Digite la cantidad de estudiantes a evaluar: ");

for (i=0; i<cantidad; i++){
    estudiante = prompt(`Digite el nombre del estudiante #${i +1}`);
    sexo = prompt(`Digite el sexo del estudiante "M" o "F" #${i +1}`);
    nota = parseFloat(prompt(`Digite la nota del estudiante de 1 - 100 #${i +1}`));

    if( nota >= 0 && nota <= 100){
        if (nota > calificacionMayor) {
            calificacionMayor = nota;
            nombreCalificacionMayor = estudiante;
        }
    
        if (nota < calificacionMenor) {
            calificacionMenor = nota;
            nombreCalificacionMenor = estudiante;
        }

    } else{
        alert("Digite una nota correcta!");
        break;
    }

    if (sexo === "M" ){
        masculino++;
    } else if (sexo === "F" ){
        femenimo++;
    }

}

console.log(`${nombreCalificacionMayor} obtuvo una nota de: ${calificacionMayor} y fue el estudiante con el mejor desempeño`);
console.log(`${nombreCalificacionMenor} obtuvo una nota de: ${calificacionMenor} y fue el estudiante con el peor desempeño`);
console.log(`En la clase hay un total de: ${masculino} hombres y ${femenimo} mujeres`);