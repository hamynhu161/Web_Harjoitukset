"use strict";

function concat(taulukko) {
    let nimet = "";

    for (const nimi of taulukko) {
        console.log(`nimi: ${nimi}`);
        nimet += nimi;
    }
    return nimet;
}

const lista = ["Anna", "Matti", "Viivi", "Heidi"];

let tulos = concat(lista);

document.querySelector("#target").textContent = tulos;