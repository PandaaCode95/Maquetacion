let nameU = document.getElementById("nombres");
let from = document.getElementById("from");
let destiny = document.getElementById("destino");
let nperson = document.getElementById("nperson");
let when = document.getElementById("fecha");
let mens = document.getElementById("mensaje");


let impJs = document.getAnimations("impJs");
let arrD=[];
let arrD2=[];
let impjavita = document.getElementById("javita")

function userData(){
    let userName = nameU.value;
    let fromUx = from.value;
    let whereUx = destiny.value;
    let nperUx = nperson.value;
    let whenUx = when.value;

    let data = {
        name : userName,
        from : fromUx,
        destiny: whereUx,
        nper: nperUx,
        when :whenUx
    }
    arrD.push(data);
    console.log(arrD)
}


function filterUx(){
    
   arrD2 = arrD.filter(element=> element.destiny == "canarias")
   
   console.log(arrD2);
}
for(let i = 0 ; i<arrD2.length;i++){
    console.log(arrD2[i])
}

for(let i = 0 ; i < arrDeDatos2.length ; i++){
    impjavita.innerHTML +=
    `
    <p> ${arrDeDatos2[i].name} <br>
        ${arrDeDatos2[i].from} <br>
        ${arrDeDatos2[i].destiny} <br>
        ${arrDeDatos2[i].nper} <br>
        ${arrDeDatos2[i].when} <br> 
      </p>`
}
