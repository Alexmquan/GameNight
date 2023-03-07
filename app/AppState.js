import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { player } from "./Models/player.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */

  players = [
    new player('Peyton', 0, 'https://images.unsplash.com/photo-1563482776068-4dac10f9373d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3N0cmljaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
    new player('Alex', 0, 'https://images.unsplash.com/photo-1492201722955-33e840ece203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZsYW1pbmdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
  ];



  values = loadState('values', [Value])
}





export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
