class Prenda {

    constructor(nombre, precio) {

        this.nombre = nombre;
        this.precio = precio;
    }
}
let arrayCarrito = [];
let prenda1 = new Prenda("Hombre XL", 85);
let prenda2 = new Prenda("Mujer 1", 150);
let prenda3 = new Prenda("Mujer 2", 250);
let prenda4 = new Prenda("Mujer 3", 400);

// let muestra = document.getElementById("precio")
let muestra = $("precio")[0];

$(function (){
    $("#1").click(function(){
        arrayCarrito.push(prenda1);
        console.log(arrayCarrito)
    })
    $("#2").click(function(){
        arrayCarrito.push(prenda2);
        console.log(arrayCarrito)
    })
    $("#3").click(function(){
        arrayCarrito.push(prenda3);
        console.log(arrayCarrito)
    })
    $("#4").click(function(){
        arrayCarrito.push(prenda4);
        console.log(arrayCarrito)
    })
})

// function boton1() {
//     arrayCarrito.push(prenda1);
  
// }
// function boton2() {
//     arrayCarrito.push(prenda2);
   
// }
// function boton3() {
//     arrayCarrito.push(prenda3);
    
// }
// function boton4() {
//     arrayCarrito.push(prenda4);
    
// }

// let precio1;
// function imprimirPrenda(){
    // let precio=0;
    // for(let i = 0; i< arrayCarrito.length; i++){
       
    //     precio = precio + arrayCarrito[i].precio;
    // }
        
    //  $("precio").text(precio1)
// }
// $("carrito").click(imprimirPrenda()).html();
function imprimirPrenda(){
$( "#pagar" ).click(function() {
    let precio=0;
    for(let i = 0; i< arrayCarrito.length; i++){
       
        precio = precio + arrayCarrito[i].precio;
    }
        
    
   
    $( "#precio" ).html(precio);
  });
}