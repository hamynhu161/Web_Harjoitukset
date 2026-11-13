"use strict";

const elementti = document.querySelector("#target");

const li1 = document.createElement("li");
li1.textContent = "First item";
li1.setAttribute("class", "my-item");

const li2 = document.createElement("li");
li2.textContent = "Second item"; 
li2.setAttribute("class", "my-item");

const li3 = document.createElement("li");
li3.textContent = "Third item";
li3.setAttribute("class", "my-item");

elementti.appendChild(li1);
elementti.appendChild(li2);
elementti.appendChild(li3);
