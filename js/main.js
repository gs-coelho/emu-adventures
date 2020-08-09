import { CenaCarregamento } from "./CenaCarregamento.js";
import { CenaMenu } from "./CenaMenu.js";
import { CenaJogo } from "./CenaJogo.js";

let config = {
  type: Phaser.AUTO,
  width: 900,
  height: 600,
  parent: 'jogo',
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 100,
      },
      debug: true,
    },
  },
  scene: [CenaCarregamento, CenaMenu, CenaJogo],
};

let game = new Phaser.Game(config);
