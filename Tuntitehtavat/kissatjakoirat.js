'use strict';

// const { createContext } = require("react");

//1. Korjaa linkki JavaScriptillä: 
// Koira-linkin pitää viedä oikealle Wikipedia-sivulle.
document.querySelector("#koiralinkki").setAttribute("href", "https://fi.wikipedia.org/wiki/Koira");


//2. Tässä yritetään lisätä kissalistaan uusi elementti.
// Korjaa toimivaksi.

const ol = document.querySelector('ol');
const kissalisays = document.createElement('li');
kissalisays.textContent = 'Kissat pärjäävät mainiosti yksinäänkin.';
ol.appendChild(kissalisays);

//3. Tässä yritetään lisätä koiralistaan uusi elementti. 
// Korjaa toimivaksi.

const ul = document.querySelector('ul');  //se on samaa: const ul = document.getElementsByTagName('ul')[0]; 
const koiralisays = document.createElement('li');
koiralisays.textContent = "Monet koirat palvovat omistajaansa.";
ul.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Elementtiä ' + evt.currentTarget.tagName + ' klikattiin');
});



//tuntitehtävä 3, esimerkki
addEventListener("keydown", function(evt){
    console.log(evt.key);
    if (evt.key === "k") {
        alert("Painoit salaista nappia!");
    }
});

//lisää tapahtuman kuntelijan koiralle
const koira = document.querySelector("#koiralinkki");
koira.addEventListener("mouseover", function() {
    console.log("Hiiri on koiran päällä!");
});

//lisää tapahtuman kuntelijan paragraph
//create event
const myEvent = new CustomEvent("copyNotAllowed");
//Listen event
const para = document.querySelector("#protected");
para.addEventListener("copyNotAllowed", function () {
    console.log("Copying text is not allowed!");
})
//trigger event
para.dispatchEvent(myEvent)

//lisää tapahtuman kuntelijan sivulle
document.addEventListener("copy", function (event) {
    event.preventDefault();
    alert("Copying text is not permitted!");
})
