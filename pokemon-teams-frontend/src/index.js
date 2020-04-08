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


    function addPokemon(trainerId){
        fetch(POKEMONS_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({'trainer_id' : trainerId})
        })
        .then(resp => resp.json())
    }

    function releasePokemon(pokemonId){
        return fetch(`${POKEMONS_URL}/${pokemonId}`, {
            method: "DELETE",
        })
        .then(resp = resp.json())
    }

    function trainerMoves(event){
        if(event.target.innerText === 'Add Pokemon'){
            addPokemon(parseInt(event.target.dataset.trainerId))
            .then(pokemon => {
                if(!pokemon.error)
                let trainerCard = event.target.parentNode
                let pokemonTeam = trainerCard.querySelector('ul')
                pokemonTeam.innerHTML += `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
            })
        }
        if(event.target)
    }



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







})

