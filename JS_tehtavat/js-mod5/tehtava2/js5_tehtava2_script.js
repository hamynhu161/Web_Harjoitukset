"use strict";

const form = document.querySelector("form");
form.addEventListener("submit", async(evt) => {
    evt.preventDefault();
    const query = document.querySelector("#query").value;
    
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    console.log("Haettu data: ", data);
})