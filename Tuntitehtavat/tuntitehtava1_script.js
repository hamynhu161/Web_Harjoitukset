"use strict";

document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInput = document.querySelector("#qty");
    let promoInput = document.querySelector("#promo")

    const price = priceInput.value;
    const qty = qtyInput.value;
    const promoCode = promoInput.value;

    let total_price = price * qty;

    let discount;
    do {
        discount = Math.random();
        console.log(discount);
    } while (discount > 0.1);
    console.log(discount)

    if (promoCode === "ale") {
        total_price = total_price * 0.7;
    } else if (promoCode === "super2026") {
        total_price *= 0.5;
    }

    document.querySelector("#result").textContent = (`Total price: ${total_price}`);
})

document.getElementById("button").addEventListener("click", () => {
    let nimiInput = document.querySelector("#nimi");
    let arvosanaInput = document.querySelector("#arvosana");

    const nimi = nimiInput.value;
    const arvosana = arvosanaInput.value;

    document.querySelector("#target").textContent = (`${nimi}: ${arvosana}`);
})