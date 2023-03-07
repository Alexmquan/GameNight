import { appState } from "../AppState.js";

class PlayerService {

  raiseScore(name) {
    let player = appState.players.find(p => p.name == name)
    player.score += 1
  }
  lowerScore(name) {
    let player = appState.players.find(p => p.name == name)
    if (player.score > 0) {
      player.score -= 1
    }
  }
}

export const playerService = new PlayerService