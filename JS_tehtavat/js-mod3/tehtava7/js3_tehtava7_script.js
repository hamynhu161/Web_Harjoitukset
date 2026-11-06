"use strict";

function noppaHeito (tahkot) {
    let tulos = Math.floor(Math.random()*tahkot) + 1;
    return tulos;
}

const tahkot = parseInt(prompt("Anna tahkojen lukumäärä: "));

while (true){
    let tulos = noppaHeito(tahkot);

    let li = document.createElement("li");
    li.textContent = `Nopan heiton tulos: ${tulos}`; 
    document.querySelector("#target").appendChild(li);

    if (tulos === tahkot) {
        break;
    }
}

