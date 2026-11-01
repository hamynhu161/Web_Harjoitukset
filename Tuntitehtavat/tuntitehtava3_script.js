"user strict";

const opiskelija1 = {
    nimi: "Anna",
    opintopistemaara: 175,
    opintopistetta_puuttuu: function() {
        return 240 - this.opintopistemaara;
    },
};

const opiskelija2 = {
    nimi: "Matti",
    opintopistemaara: 190,
    opintopistetta_puuttuu: function() {
        return 240 - this.opintopistemaara;
    },
};

const opiskelija3 = {
    nimi: "Anna",
    opintopistemaara: 185,
    opintopistetta_puuttuu: function() {
        return 240 - this.opintopistemaara;
    },
};

const opiskelijat = [opiskelija1, opiskelija2, opiskelija3];

for (const opiskelija of opiskelijat ) {
    console.log(
        "Opiskelijalta " +
        opiskelija.nimi +
        " puuttuu " +
        opiskelija.opintopistetta_puuttuu() +
        " opintopistettä.",
    );
    document.querySelector("#target1").innerHTML += "Opiskelijalta " +
        opiskelija.nimi +
        " puuttuu " +
        opiskelija.opintopistetta_puuttuu() +
        " opintopistettä. <br>";
}

for (let i = 0; i < opiskelijat.length; i++ ) {
    opiskelijat[i].numero = `26${i+1}`;
    console.log(opiskelija1.nimi + ", hänen numero on: " + opiskelija1.numero );
    document.querySelector("#target2").innerHTML += `${opiskelijat[i].nimi}, hänen numero on: ${opiskelijat[i].numero} <br>`;
}

