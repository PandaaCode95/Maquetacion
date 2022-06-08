// let turno=0;
// let fichas=["O","X"];
// let countFich=0;
// let Pfin =false;
// let textWin = document.getElementById("frase");
// let buttons = Array.from(document.getElementsByTagName(button));

// buttons.forEach(x => x.addEventListener("click",ponerFicha));

// function ponerFicha(event){
//     let button_S = event.target;
//     if(!Pfin && button_S.innerHTML == ""){
//         button_S.innerHTML =fichas[turno]
//         countFich =+1;
//     }
//     let estadoPartida = estado();
//     if(estadoPartida==0){
//         cambiarT();
//         if(countFich<9){
//             ia();
//             estadoPartida=estado();
//             countFich=+1;
//             cambiarT();
//         }
//     }
// }
// function estado(){
//     posicionVictoria=0;
//     nEstado=0;
// }
// function same(...args){
//     valores = args.map(x=>x.innerHTML)
//     for(let i=0 ; i<valores.length){
//         if(valores.args[i]){
//             for valores

//         }
//     }
// }