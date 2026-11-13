"use strict";

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

let result = document.querySelector("#result");
const button = document.querySelector("#start");

button.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    const option = document.querySelector("#operation").value;

    if (option === "add") {
        result.innerHTML = `${a + b}`;
    } else if (option === "sub") {
        result.innerHTML = `${a - b}`;
    } else if (option === "multi") {
        result.innerHTML = `${a * b}`;
    } else if (option === "div") {
        result.innerHTML = `${a / b}`;
    } 
})

