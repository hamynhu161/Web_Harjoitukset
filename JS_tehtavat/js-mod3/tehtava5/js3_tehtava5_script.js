"use strict";

let luvut = [];

while (true) {
    const luku = parseInt(prompt("Anna luku: "));

    if (luvut.includes(luku)) {
        alert("Luku on jo annettu.");
        break;
    }

    luvut.push(luku);
}

luvut.sort((a,b) => a - b);

console.log("Kaikki annetut luvut nousevassa järjestyksessä: " + luvut);

