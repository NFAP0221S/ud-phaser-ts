import Phaser from "phaser";

const config = {
  // AUTO는 webGL로 최적화 렌더링
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
    // preload에 설정된 함수를 받아와 preload함
    // create 는 설정된 함수의 키를 실행
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
  this.add.image(0, 0, "sky").setOrigin(0);
}
