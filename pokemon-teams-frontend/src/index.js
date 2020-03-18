const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// When a user loads the page, they should see all trainers, with their current team of Pokemon.

// fetch trainers with TRAINERS_URL
// Create Trainer Cards (WITH Pokemon teams)
// Render cards on page

// Trainer Card
<div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> 
// ______________________________________________________________________________________________________________________________________
// Whenever a user hits Add Pokemon and they have space on their team, they should get a new Pokemon.
// Whenever a user hits Release Pokemon on a specific Pokemon team, that specific Pokemon should be released from the team.


function getTrainers(){
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
}


document.addEventListener('DOMContentLoaded', function(event){
    getTrainers()
})

function rendorTrainers(trainer){
    let div = dcoument.createElement('div')
    div.className = 'card'
    div.dataset.id = trainer.id
    div.innterHTML = ('`<p>${trainer.name}</p>`')

    let button = document.createElement('button')
    
}
