async function fetchData(url = "https://pokeapi.co/api/v2/pokemon") {
    try{
        const response = await fetch(url);

        if(response.ok) {
            const response_data = await response.json();
            return response_data;
        } else {
            throw new Error(`HTTP-virhe! Tilakoodi: ${response.status}`)
        }
    }
    catch (error) {
        console.log(`Virhe datan hakemisessa ${error}`);
    }
}

async function showPokemonTypes(event, url){
    const pokemonData = await fetchData(url);
    console.log(pokemonData);
    console.dir(event);
}      

async function createPokemonView() {
    const pokemonData = await fetchData();
    const pokemonDiv = document.querySelector("#poke-content");
    
    for (let pokemon of pokemonData.results) {
        console.log(pokemon);
        let onPokemonDiv = document.createElement("div");
        let pokemonText = document.createElement("p");

        pokemonText.textContent = pokemon.name;

        pokemonText.addEventListener("click", (event) => showPokemonTypes(event, pokemon.url));

        onPokemonDiv.appendChild(pokemonText);
        pokemonDiv.appendChild(onPokemonDiv);

    }
    // console.log(pokemonData)
}

createPokemonView();


