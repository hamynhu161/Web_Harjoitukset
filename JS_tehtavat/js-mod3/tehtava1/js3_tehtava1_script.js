"use strict";

let luvut = [];

for (let i = 0; i < 5; i++) {
    const annettu_luku = parseInt(prompt("Anna lukun: "));
    luvut.push(annettu_luku );
}
    
const target = document.querySelector("#target");
target.textContent = `Kaikki luvut päinvastaisessa järjestyksessä ovat: `;

for (let j = (luvut.length-1); j >= 0; j --) {
    target.textContent += luvut[j];

    if (j > 0) {
        target.textContent += ", ";
    }
}
