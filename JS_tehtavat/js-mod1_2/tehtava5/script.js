"use strict";

const vuosiluku = prompt("Anna vuosiluvun: ");

if ((vuosiluku % 4 === 0  && vuosiluku % 100 !== 0)|| vuosiluku % 400 === 0) {
    document.querySelector("#target").innerHTML = "Tämä vuosi on karkauvuosi.";
} else {
    document.querySelector("#target").innerHTML = "Tämä vuosi ei ole karkauvuosi.";
}