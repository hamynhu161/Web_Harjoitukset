"use strict";

const luku = parseInt(prompt("Anna kokonaisluku: "));

let alkuluku = true;

if (luku < 2) {
    alkuluku = false;
} else {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            alkuluku = false;
            break;
        }
    }
}

if (alkuluku) {
    document.querySelector("#target").textContent = `Luku ${luku} on alkuluku.`;
} else {
    document.querySelector("#target").textContent = `Luku ${luku} ei ole alkuluku.`;
}


