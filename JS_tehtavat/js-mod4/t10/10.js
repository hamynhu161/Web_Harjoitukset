"use strict";

const input1 = document.querySelector('input[name="firstname"]');
const input2 = document.querySelector('input[name="lastname"]');
const submit = document.querySelector('input[type="submit"]');

submit.addEventListener("click", (evt) => {
    evt.preventDefault();
    const etunimi = input1.value;
    const sukunimi = input2.value;
    document.querySelector("#target").textContent = `Nimesi on ${etunimi} ${sukunimi}.`   
})