import Juego from "/assets/scenes/Juego.js";
import Precarga from "/assets/scenes/Precarga.js";
import Fin from "/assets/scenes/Fin.js";
import nivel2 from "/assets/scenes/nivel2.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
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
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precarga, Juego,nivel2, Fin],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
