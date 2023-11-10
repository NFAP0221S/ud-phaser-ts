import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
}

function create() {
  // x - 400
  // y - 300
  // key - sky
  this.add.image(config.width / 2, config.height / 2, "sky");
}
