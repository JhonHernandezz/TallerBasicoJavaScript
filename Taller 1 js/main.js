/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */

let nombre = [];
let cantidad = [];
let precio = [];
let total = [];

nombre = prompt(`Digite el nombre del articulo a llevar:`);
cantidad = prompt(`Digite la cantidad del articulo a llevar:`);
precio = prompt(`Digite el precio del articulo a llevar:`);

total = parseInt(cantidad) * parseInt(precio);

console.table(`Nombre: ${nombre} \nCantidad: ${cantidad} \nPrecio unidad: ${precio} \nTotal: ${total}`);