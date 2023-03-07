import { PlayerController } from "./Controllers/PlayerController.js";

class App {
  // valuesController = new ValuesController();
  playerController = new PlayerController
  // connects rest of .js files to the DOM through the players controller. It is the medium between MVC and the DOM
}

window["app"] = new App();
