let menu; 
var miArray = [];
let miObjecto = {};

// while (menu != -1) {

    menu = Number(prompt(`------------- MENU -------------
    0. ---> Salir                                             -
    1. ---> Lectura de datos                                  -
    2. ---> Crear objeto                                      -
    3. ---> Mostrar objeto                                    -
    4. ---> Crear array                                       -
    5. ---> Mostrar array                                     -
    6. ---> Elimine primer elemento del Array                 -
    7. ---> Elimine ultimo elemento del Array                 -
    8. ---> Eliminar cualquier elemento del array
    9. ---> Agregar elemento al comienzo del array            -
    10. ---> Agregar elemento al final del array              -
    11. ---> Crear array con objetos
    12. ---> Iterar array con objetos con FOR 
    13. ---> Iterar array con objetos con ForEach
    14. ---> Iterar array con objetos con Map y crear copia
    15. ---> Proceso personal
    --------------------------------`));

    if(menu >= 0 && menu <= 15){

        switch(menu){

            case 0:
                alert(`Salio correctamente del programa`);
                break;
        
            case 1:

                break;

            case 2:

                let nuevoObjeto = prompt('Digite el nombre del objeto')
                miObjecto[`${nuevoObjeto}`] = {}
                let cantPropiedades = Number(prompt(`Cuantas propiedades quiere que tengo su objeto ${nuevoObjeto}`));
            
                for (let i = 1; i <= cantPropiedades; i++) {
                    let nombre = prompt(`Nombre de la propiedad ${i}`);
                    let valor = Number(prompt(`Digite el dato de la propiedad ${nombre}`));
                    
                    miObjecto[`${nuevoObjeto}`][`${nombre}`] = valor;
                }

                break;
            
            case 3:

                alert(JSON.stringify(miObjecto));

                break;

            case 4:

                let cantidad = prompt("Digite la cantidad del objeto")
        
                for (i = 1; i <= cantidad; i++) {
                var objeto = { nombre: prompt("Digite el nombre del objeto"), valor: prompt("Digite el valor del objeto")};
                miArray.push(objeto);
                
                }

                alert("Array creado con exito")

                break;  
                
            case 5:

                alert(JSON.stringify(miArray));

                break; 

            case 6:

                if (miArray.length != 0){
                    const EliminarPrimero = miArray;
                    miArray.shift();
                    alert(`${EliminarPrimero}\nPrimer elemento eliminado del array\n${miArray}`)
                } else{
                    alert(`No existen datos en el array`)
                } 
            
                break; 

            case 7:
                
                if (miArray.length != 0){
                    const EliminarUltimo = miArray;
                    miArray.pop();
                    alert(`${EliminarUltimo}\nPrimer elemento eliminado del array\n${miArray}`)
                } else{
                    alert(`No existen datos en el array`)
                } 

                break; 

            case 8:
                alert(`Numero 8`);
                break; 

            case 9:

                let datoPrincipio = prompt(`Digite el dato agregar al array`)
                miArray.unshift(datoPrincipio)
                alert(`${datoPrincipio} Agregado con exito\n${miArray}`)

                break; 

            case 10:

                let datoFinal = prompt(`Digite el dato agregar al array`)
                miArray.push(datoFinal)
                alert(`${datoFinal} Agregado con exito\n${miArray}`)

                break; 

            case 11:
                alert(`Numero 11`);
                break; 

            case 12:

                var miArray = [
                    { nombre: 'Juan', edad: 30 },
                    { nombre: 'María', edad: 25 },
                    { nombre: 'Pedro', edad: 40 }
                ];

                for (var i = 0; i < miArray.length; i++) {
                    console.log(miArray[i].nombre + ' tiene ' + miArray[i].edad + ' años.');
                }

                break; 

            case 13:
                alert(`Numero 13`);
                break; 

            case 14:
                alert(`Numero 14`);
                break; 

            case 15:
                alert(`Numero 15`);
                break; 
        
        }

    } else{
        alert(`Digite una opción correcta`)
    }

// }