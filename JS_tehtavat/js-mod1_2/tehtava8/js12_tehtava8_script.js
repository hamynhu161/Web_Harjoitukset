"user strict";

const alkuvuosi = parseInt(prompt("Anna alkuvuosi: "))
const loppuvuosi = parseInt(prompt("Anna loppuvuosi: "))

document.querySelector("#vuosien-välillä").textContent = alkuvuosi + "-" + loppuvuosi + " aikana";

for (let i = alkuvuosi; i < loppuvuosi; i++) {
    if (i % 400 === 0 || i % 4 === 0 && i % 100 !== 0) {
        document.querySelector("#target").innerHTML += `<li> ${i}`;
    }
}