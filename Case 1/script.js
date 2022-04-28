const { fetch } = require('native-fetch')

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(res => res.text())
//     .then(body => console.log(body))

async function loadPokemonData(){
    try {
        const result = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=3')
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}
loadPokemonData();

// const loadPokemonData = loadPokemonData.map(pokemon => {
//     return pokemon 
// })
// console.log(loadPokemonData)

