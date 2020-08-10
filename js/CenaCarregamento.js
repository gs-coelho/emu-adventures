export class CenaCarregamento extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaCarregamento",
    });
  }
  preload() {
    this.load.on("complete", () => {
      console.log("bu");
      this.scene.start("CenaMenu");
    });

    this.load.image("placeholder", "img/placeholder.png");
    this.load.image("fundo", "img/blue-bg.jpg");
    this.load.image("titulo", "img/emu-adventures.png");
    this.load.image("btnJogar", "img/jogar.png");
    this.load.image("chao", "img/chao-placeholder.png");
    this.load.image("plataforma", "img/plataforma-placeholder.png");
    this.load.spritesheet("emu", "img/emu-placeholder.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
    this.load.image("imgEma", "img/idle-ema.png");
    game.load.audio("soundJogar", "sounds/inicio-jogo.wav");
  }
  create() {}
  update() {}
}
