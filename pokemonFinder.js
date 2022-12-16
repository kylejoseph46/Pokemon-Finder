//Obtaining html elements.
let search_input = document.getElementById('search-input')
let search_button = document.getElementById('search-button')
let image = document.getElementById('image')
let display_name_type = document.getElementById('display-name-and-type')
let og_pokemon_name = document.getElementById('pokemon-name')
let og_pokemon_type = document.getElementById('pokemon-type')


//When pokemon is searched it calls the API function.
search_button.addEventListener("click", runPokemonAPI)


//Fetches the API and manipulates the data to change the pokemon on the screen.
function runPokemonAPI(event) {
  let pokemonName = search_input.value
  let pokemonNameFixed = pokemonName.toLowerCase()
  

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameFixed}`)
    .then(response => response.json())
    .then(data => {


      //Changes the pokemon name.
      let new_name = data.forms[0].name
      og_pokemon_name.innerHTML = `Pokemon: ${new_name}`
      og_pokemon_name.style.color = "White"


      //Changes the Pokemon type.
      let type1 = ""
      let type2 = ""
      if (data.types.length > 1) {
        type1 = data.types[0].type.name
        type2 = data.types[1].type.name
        og_pokemon_type.innerHTML = `Types: ${type1} and ${type2}`
        og_pokemon_type.style.color = "White"
      }
      else {
        type1 = data.types[0].type.name
        og_pokemon_type.innerHTML = `Type: ${type1}`
        og_pokemon_type.style.color = "White"
      }


      //Changes the Pokemon image.
      image.src = data.sprites.front_default
    })
    .catch(err => console.error(err));
}


console.log("hello")