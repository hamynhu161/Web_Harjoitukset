'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector("#target");

for (let name of names) {
    target.innerHTML += `<li>${name}</li>`;
}