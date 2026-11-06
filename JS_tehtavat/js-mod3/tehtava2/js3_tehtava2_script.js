"use strict";

const lukumaara = parseInt(prompt("Anna osallistujien lukumäärä: "));

let osallistujat = [];

for (let i = 1; i <= lukumaara; i++) {
    const nimi = prompt("Anna osallistujan nimi: ");
    osallistujat.push(nimi);
}

osallistujat.sort();

for(let osallistuja of osallistujat) {
    document.querySelector("#target").innerHTML += `<li>${osallistuja}</li>`
}


