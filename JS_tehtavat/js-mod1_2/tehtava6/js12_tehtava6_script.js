"use strict";

const vastaus = confirm ("Lasketaanko neliöjuuri?");

if (vastaus === true) {
    const luku = parseInt(prompt("Anna luku: "))

    if (luku >= 0) {
        document.querySelector("#target").innerHTML = Math.sqrt(luku);
    } else if(luku < 0) {
        document.querySelector("#target").innerHTML = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    }
} else if (vastaus == false) {
    document.querySelector("#target").innerHTML = "Neliöjuurta ei lasketa.";
} 