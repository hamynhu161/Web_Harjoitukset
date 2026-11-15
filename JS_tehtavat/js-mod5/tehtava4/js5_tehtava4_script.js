"use strict";

const form = document.querySelector("form");

const result = document.querySelector("#results");

form.addEventListener("submit", async(evt) => {
    evt.preventDefault();
    const query = document.querySelector("#query").value;
    
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    console.log("Haettu data: ", data);

    result.innerHTML = "";

    for (const tvshow of data) {
        const article = document.createElement("article");

        const h2 = document.createElement("h2");
        h2.textContent = tvshow.show.name;
        article.appendChild(h2);

        const link = document.createElement("a");
        link.href = tvshow.show.url;
        link.target = "_blank";
        link.textContent = "More Info";
        article.appendChild(link);

        const img = document.createElement("img");
        img.src = tvshow.show.image? tvshow.show.image.medium : "https://placehold.co/210x295?text=Not%20Found";
        img.alt = tvshow.show.name;
        article.appendChild(img);

        const summary = document.createElement("div");
        summary.innerHTML = tvshow.show.summary;        
        article.appendChild(summary);

        result.appendChild(article);
    }
})






