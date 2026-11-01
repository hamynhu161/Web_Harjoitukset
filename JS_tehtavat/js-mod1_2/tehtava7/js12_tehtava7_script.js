"use strict";

let kysy = parseInt(prompt("kuinka monta noppaa heitetään: "));
document.querySelector("#target").innerHTML = kysy;

let summa = 0;
for (let i = 1; i <= kysy; i ++){
    const luku = Math.floor(Math.random()*6);
    document.querySelector("#number").innerHTML += `${i}. luku: ${luku} <br>`
    summa += luku;
}
document.querySelector("#target").innerHTML = `Summa: ${summa}`;