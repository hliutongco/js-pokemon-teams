const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')

  Adapter.getPokemen().then(data => {
    data.forEach((trainerObj) => {
      const trainer = new Trainer(trainerObj)
      main.appendChild(trainer.render())
    })
  })

  main.addEventListener('click', (event) => {
    const trainer = event.target.dataset.trainerId
    const pokemon = event.target.dataset.pokemonId
    if(trainer){
      Adapter.postPokeman(trainer)
      .then(data => {
        if(data.error) return
        const pokeman = new Pokemon(data)
        const ul = document.querySelector(`ul[data-id="${trainer}"]`)
        ul.appendChild(pokeman.render())
      })
    }
    else if(pokemon){
      event.target.parentElement.remove()
      Adapter.deletePokeman(pokemon)
    }
  })

})
