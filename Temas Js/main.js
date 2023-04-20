/* Funciones Callback */

// Una función de callback es una función que se pasa a otra función como un argumento
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// JavaScript ejecuta el código secuencialmente en orden descendente. 
// Sin embargo, hay algunos casos en los que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no secuencial. 
// Esto se llama programación asíncrona.

listaToque = [];

let boton = document.querySelector("#callback-btn");

boton.addEventListener("click", function() {  
    alert("El usuario ha hecho clic en el botón.");
});

/* function comer(hora, comida) {
    comida (hora);  
}
    
function desayuno(hora) {   
    alert(`${hora}: Desayuno`);   
}
    
function desayuno2(hora) {   
    alert(`${hora}: Segundo Desayuno`);   
} */

/* setTimeout(() => { 
    alert("Este mensaje se muestra después de 3 segundos");
}, 3000); */