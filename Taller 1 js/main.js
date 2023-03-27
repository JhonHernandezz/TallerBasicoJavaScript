/* 9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. 

Diseñe un programa que pida por teclado 
los nombres de cada atleta finalista 
y a su vez, sus marcas del salto en metros. 

Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */

let record = 15.50;

let personas ={
    name: [],
    marcas: []
}

let finalistas = Number(prompt("Digite la cantidad de finalistas: "));

for(i=0; i<finalistas; i++){
    let nombre = prompt(`Digite el nombre del finalista #${i+1}`);
    let marca = Number(prompt(`Digite la marca del finalista #${i+1}`));

    if(marca >= record){
        alert(`${nombre} rompio el record ${record} con una marca de ${marca} y gano 500 millones :)`)

        record = marca;
    }

    personas.name.unshift(nombre);
    personas.marcas.unshift(marca);
}

function ganador(data){
    let marcaGanador = Math.max(...data.marcas)
    let posicionGanador = data.marcas.indexOf(marcaGanador)

    alert(`${data.name[posicionGanador]} con una marca de: ${data.marcas[posicionGanador]}`)
}
ganador(personas)