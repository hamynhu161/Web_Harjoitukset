"use strict";

const noppien_maara = parseInt(prompt("Anna noppien määrä: "));
const silmälukuja_summa = parseInt(prompt("Anna silmälukujen summa: "))


let kerta = 0;
let kerta_kokonais = 10000;

for (let i = 1; i <= kerta_kokonais; i++) {
    let summa = 0;
    
    for (let j = 1; j < (noppien_maara+1); j++) {
        let noppa_sivu = Math.floor(Math.random()*6)+1;
        summa += noppa_sivu;
        // console.log(j + "." + "summa:" + summa);
    }

    if (summa === silmälukuja_summa) {
    kerta += 1;
    // console.log(i + "." + "kerta: " + kerta);
    };
}

let todennäköisyys = (kerta/kerta_kokonais)*100;

document.querySelector("#target").textContent = `Todennäköisyys saada summa ${silmälukuja_summa} ${noppien_maara} nopalla on ${todennäköisyys.toFixed(2)}%`;
