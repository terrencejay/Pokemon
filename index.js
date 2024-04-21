

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("That pokemon has not been caught yet!");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error=> console.error(error));


async function fetchData(){
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("That pokemon hasn't been caught yet");
        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const pokemonType = data.types[0].type.name
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(" , ");

        document.getElementById("pokemonType").textContent = `Type: ${pokemonType}`;
        document.getElementById("pokemonAbilities").textContent = `Abilities: ${pokemonAbilities}`;

    }
    catch(error){
        console.error(error);
    }
}