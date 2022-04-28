const { fetch } = require('native-fetch')

async function loadPokemonData(){
    try {
        const result = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=3')
        const data = await result.json();
        data.results.map((pokemon) => {
            console.log(`Name: ${pokemon.name} \n Url ${pokemon.url} \n`)
        })
    } catch (error) {
        console.log('error', error);
    }
}
loadPokemonData();

