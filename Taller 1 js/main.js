/* 2. Dado un número indicar si es par o impar y si es mayor de 10. 

let numero = prompt("Digite un número: "); */


if(numero <10){

    if(numero % 2 == 0){
        console.log(`El numero ${numero} es par`)
       
    } else{
        console.log(`El numero ${numero} es impar`)
    } 

} else{

    console.log(`El numero ${numero} es mayor`)

    if(numero % 2 == 0){
        console.log(`Y es par`)
       
    } else{
        console.log(`Y es impar`)
    } 

}