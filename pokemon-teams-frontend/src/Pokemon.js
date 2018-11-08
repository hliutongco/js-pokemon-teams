class Pokemon {
  constructor(data){
    this.id = data.id,
    this.nickname = data.nickname,
    this.species = data.species,
    this.trainer_id = data.trainer_id
  }

  render(){
    const li = document.createElement('li')
    li.innerHTML = `${this.nickname} (${this.species})
    <button class="release" data-pokemon-id=${this.id}>Release</button>`
    return li
  }
}
