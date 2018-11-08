class Adapter {
  static getPokemen(){
    return fetch('http://localhost:3000/trainers')
    .then(response => response.json())
  }

  static postPokeman(id){
    return fetch('http://localhost:3000/pokemons', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({trainer_id: id})
    }).then(response => response.json())
  }

  static deletePokeman(id){
    return fetch(`http://localhost:3000/pokemons/${id}`, {
      method: 'DELETE'
    })
  }
}
