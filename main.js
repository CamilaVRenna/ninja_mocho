import Game from "./assets/scenes/Game.js";
import Preload from "./assets/scenes/Preload.js";
import Win from "./assets/scenes/Win.js";
import GameOver from "./assets/scenes/GameOver.js";
// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 900,
      height: 700,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Preload, Game, Win, GameOver],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);