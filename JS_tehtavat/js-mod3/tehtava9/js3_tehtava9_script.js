"use strict";

function even (taulukko) {
    let uusi_taulukko = [];

    for (let luku of taulukko) {
        if (luku % 2 === 0) {
            uusi_taulukko.push(luku);
        }
    }
    return uusi_taulukko;
}

const taulukko = [3, 6, 7, 8, 2, 4];

let uusi_taulukko = even(taulukko);

console.log(`Alkuperäinen taulukko: ${taulukko}`);

console.log(`Parillisten lukujen taulukko: ${uusi_taulukko}`);
