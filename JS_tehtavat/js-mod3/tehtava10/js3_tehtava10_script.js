"use strict";

//ehdokkaiden taulukko
let ehdokas_taulukko = [];

for (let i = 1; i < 4; i ++ ) {
    let ehdokas_nimi = prompt(`Ehdokkaan ${i} nimi: `);
    let ehdokas = {name: ehdokas_nimi, votes: 0};
    ehdokas_taulukko.push(ehdokas);
}
console.log(ehdokas_taulukko); 

//äänestyksen tulos
const äänestäjä_lukumäärä = prompt("Anna äänestäjien lukumäärä: ");

let i = 0;

while (i < äänestäjä_lukumäärä) {
    let vastaus = prompt("Ketä siä äänestät: (ellie, frank, tai pamela)");

    switch (vastaus) {
        case "ellie":
            ehdokas_taulukko[0].votes += 1;
            break;
        case "frank":
            ehdokas_taulukko[1].votes += 1;
            break;
        case "pamela":
            ehdokas_taulukko[2].votes += 1;
            break;
        default:
            console.log("ääni tulkitaan tyhjäksi.");
    }
    i += 1;
}

//vertaile äänimääriä
ehdokas_taulukko.sort((a, b) => {
    console.log(a.votes, b.votes);
    return b.votes - a.votes;
});

console.log(ehdokas_taulukko);

console.log(`Voittaja on ${ehdokas_taulukko[0].name} ${ehdokas_taulukko[0].votes} äänellä.`);
console.log("Tulokset: ");

for (let ehdokas of ehdokas_taulukko) {
    console.log(`${ehdokas.name}: ${ehdokas.votes} ääntä`);
}

