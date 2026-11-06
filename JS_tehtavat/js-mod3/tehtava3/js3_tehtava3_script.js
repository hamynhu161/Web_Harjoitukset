"use strict";

let koira_nimet = [];

for (let i = 1; i <= 6; i++) {
    const koira_nimi = prompt("Anna koiran nimi: ");
    koira_nimet.push(koira_nimi);
}

koira_nimet.sort().reverse();

for(let nimi of koira_nimet) {
    const li = document.createElement("li");
    li.textContent = nimi;
    document.querySelector("#target").appendChild(li);
}