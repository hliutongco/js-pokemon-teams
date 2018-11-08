class Trainer {
  constructor(data){
    this.id = data.id,
    this.name = data.name,
    this.pokemen = data.pokemons
  }

  render(){
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    ul.dataset.id = this.id
    div.className = 'card'
    div.dataset.id = this.id
    div.innerHTML = `<p>${this.name}</p>
    <button data-trainer-id=${this.id}>Add Pokemon</button>`

    this.pokemen.forEach((pokeman) => {
      const pokemon = new Pokemon(pokeman)
      ul.appendChild(pokemon.render())
    })

    div.appendChild(ul)
    return div
  }
}
