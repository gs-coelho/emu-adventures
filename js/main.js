import { CenaCarregamento } from "./CenaCarregamento.js";
import { CenaMenu } from "./CenaMenu.js";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 100,
      },
      debug: true,
    },
  },
  scene: [CenaCarregamento, CenaMenu],
};

let game = new Phaser.Game(config);
