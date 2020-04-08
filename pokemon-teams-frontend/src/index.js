const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener('DOMContentLoaded', function(event){

    let pokeBall = document.querySelector('main')

    getTrainers()
    .then(json => {
        json.forEach(trainer => {
            let div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.dataset.id = trainer.id

            div.innerHTML = renderTrainers(trainer)
            pokeBall.append(div)

        })
    })





    function getTrainers(){
        return fetch(TRAINERS_URL)
        .then(resp => resp.json())
    }

    function renderTrainers(trainer) {
        return `<p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>
          ${trainer.pokemons.map( pokemon => {
            return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
          }).join('')}
        </ul>
        `
      }


    function addPokemon(){
        
      }




})

