"use strict";

const nimi = prompt("Anna nimesi: ");

const lajitteluluku = Math.floor(Math.random()*4)+1;
document.querySelector("#luku").innerHTML = `Lajitteluhatusta näkyy numero: ${lajitteluluku}.`

if (lajitteluluku === 1) {
    document.querySelector("#tulos").innerHTML = `${nimi}, sinä olet Rohkelikko.`;
} else if (lajitteluluku === 2) {
    document.querySelector("#tulos").innerHTML = `${nimi}, sinä olet Luihuinen.`;
} else if (lajitteluluku === 3) {
    document.querySelector("#tulos").innerHTML = `${nimi}, sinä olet Puuskupuh.`;
} else {
    document.querySelector("#tulos").innerHTML = `${nimi}, sinä olet Korpinkynsi.`;
}