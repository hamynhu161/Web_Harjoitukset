"use strict";

function noppaHeito () {
    let tulos = Math.floor(Math.random()*6) + 1;
    return tulos;
}

while (true){
    let tulos = noppaHeito();

    let li = document.createElement("li");
    li.textContent = `Nopan heiton tulos: ${tulos}`; 
    document.querySelector("#target").appendChild(li);

    if (tulos === 6) {
        break;
    }
}

