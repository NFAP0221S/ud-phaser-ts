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
    // 프리로드에 설정된 함
    preload: preload,
    create: create,
  },
};

new Phaser.Game(config);

function preload() {
  // key 설정
  // 받아올 이미지
  this.load.image("sky", "assets/sky.png");
}

function create() {
  // x - 400
  // y - 300
  // key - sky
  this.add.image(config.width / 2, config.height / 2, "sky");
}
