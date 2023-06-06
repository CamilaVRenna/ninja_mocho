export default class Precarga extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    // key of the scene
    super("precarga");
  }

  preload() {
    // load assets
    this.load.tilemapTiledJSON("map", "./public/tilemaps/basic.json");
    this.load.tilemapTiledJSON("map2", "./public/tilemaps/nivel4.json");
    this.load.image("tilesFondo", "./public/images/sky_atlas.png");
    this.load.image("tilesPlataforma", "./public/images/platform_atlas.png");
    this.load.image("bomb", "./public/images/bomb.png");
    this.load.image("star", "./public/images/star.png");

    this.load.spritesheet("dude", "./public/images/dude.png", {
      frameWidth: 65,
      frameHeight: 91,
    });

    this.load.image("salida", "./public/images/salida.png");
  }

  create() {
    //  Our player animations, turning, walking left and walking right.
    // se crea una sola vez, para que no de error en el restart de la escena
    
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // init scene juego
    this.scene.start("juego");
  }
}
