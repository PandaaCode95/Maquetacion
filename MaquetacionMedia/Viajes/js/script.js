let nameU = document.getElementById("nombres");
let from = document.getElementById("from");
let destiny = document.getElementById("destino");
let nperson = document.getElementById("nperson");
let when = document.getElementById("fecha");
let mens = document.getElementById("mensaje");


let impJs = document.getAnimations("impJs");
let arrD=[];

let impjavita = document.getElementById("javita")

function userData(){
    let userName = nameU.value;
    let fromUx = from.value;
    let whereUx = destiny.value;
    let nperUx = nperson.value;
    let whenUx = when.value;

    let data = {
        "name" : userName,
        "from" : fromUx,
        "destiny": whereUx,
        "nper": nperUx,
        "when" :whenUx
    }
    arrD.push(data);
    console.log(arrD)
}


function filterUx(){
    
 let arrD2 = arrD.filter(element=> element.destiny == "canarias")
   
   console.log(arrD2+ "entro");

// for(let i = 0 ; i<arrD2.length;i++){
//     console.log(arrD2[i])
// }
let  impjavita ="";
for(let i = 0 ; i < arrD2.length ; i++){
  
  impjavita = impjavita + 3 +
    `
    <p> ${arrD2[i].name} <br>
        // ${arrD2[i].from} <br>
        // ${arrD2[i].destiny} <br>
        // ${arrD2[i].nper} <br>
        // ${arrD2[i].when} <br> 
      </p>`

}
console.log(impjavita)
document.getElementById("javita").innerHTML = impjavita;
}