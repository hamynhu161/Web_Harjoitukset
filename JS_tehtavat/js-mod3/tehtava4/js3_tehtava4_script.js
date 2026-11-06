"use strict";

let luvut = [];

while (true) {
    const luku = parseInt(prompt("Anna luku: "));

    if (luku === 0) {
        break
    }

    luvut.push(luku);
}

luvut.sort((a,b) => b - a);
console.log("Luvut suurimmasta pienimpään: " + luvut);
