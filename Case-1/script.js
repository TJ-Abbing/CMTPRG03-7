const { fetch } = require('native-fetch')

async function loadPokemonData(){
    try {
        const result = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=3')
        const data = await result.json();
        data.results.map((pokemon) => {
            const { name, url}  = pokemon

            console.log(name);
            console.log(url);
        })
    } catch (error) {
        console.log('error', error);
    }
}
loadPokemonData();

