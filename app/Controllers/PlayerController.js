import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayerService.js";

export class PlayerController {
  //NOTE - Anything in this constructor() will run on DOM loadup
  constructor() {
    this.drawPlayers()
  }

  drawPlayers() {
    let players = (appState.players)
    let template = ''
    //NOTE - Controller can grab IDs from DOM and it is pulling data(p.playerNameCard) from the Models through the Appstate
    players.forEach(p => template += p.PlayerNameCard)
    document.getElementById('playerName').innerHTML = template

    let template2 = ''
    players.forEach(p => template2 += p.PlayerScoreCard)
    document.getElementById('playerScore').innerHTML = template2
  }

  //NOTE - These two classes are pushing arguments to the service files (players.raiseScore(name))
  // then they are drawing to the DOM
  raiseScore(name) {
    playerService.raiseScore(name)
    this.drawPlayers()
  }
  lowerScore(name) {
    playerService.lowerScore(name)
    this.drawPlayers()
  }
}