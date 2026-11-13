"use strict";

const input = document.querySelector("#calculation");
const button = document.querySelector("#start");
const result = document.querySelector("#result");

const operators = ["+", "-", "*", "/"];

button.addEventListener("click", () => {
    let num1;
    let num2;
    let operator;

    for (let op of operators) {
        if (input.value.includes(op)) {
            const num = input.value.split(op);
            num1 = Number(num[0]);
            num2 = Number(num[1]);
            operator = op;
            break;
        }
    }

    if (operator === "+") {
        result.innerHTML = `${num1 + num2}`;
    } else if (operator === "-") {
        result.innerHTML = `${num1 - num2}`;
    } else if (operator === "*") {
        result.innerHTML = `${num1 * num2}`;
    } else if (operator === "/") {
        result.innerHTML = `${num1 / num2}`;
    }
})