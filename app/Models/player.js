export class player {
  name
  score
  image

  constructor(name, score, image) {
    this.name = name
    this.score = score
    this.image = image
  }

  get PlayerNameCard() {
    return `
    <h2 class="d-flex justify-content-start"><img class="player-image" src="${this.image}" alt="player Image"> ${this.name}</h2>`
  }
  get PlayerScoreCard() {
    return `
    <h2 class="text-dark d-flex justify-content-end"> <img onclick="app.playerController.lowerScore('${this.name}')" src="minus.svg" alt="something"> ${this.score} <img onclick="app.playerController.raiseScore('${this.name}')" src="add.svg" alt=""> </h2>`
  }
}