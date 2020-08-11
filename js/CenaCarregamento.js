export class CenaCarregamento extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaCarregamento",
    });
  }
  preload() {
    this.load.on("complete", () => {
      this.scene.start("CenaMenu");
    });

    this.load.image("placeholder", "img/placeholder.png");
    this.load.image("fundo", "img/blue-bg.jpg");
    this.load.image("ceu", "img/ceu-cenario.png");
    this.load.image("casas", "img/casa-cenario.png");
    this.load.image("titulo", "img/emu-adventures.png");
    this.load.image("btnJogar", "img/jogar.png");
    this.load.image("chao", "img/rua-cenario.png");
    this.load.image("plataforma", "img/plataforma-placeholder.png");
    this.load.spritesheet("ema", "img/ema-spritesheet.png", {
      frameWidth: 300,
      frameHeight: 300,
    });
    this.load.spritesheet("tawoKey", "img/TaoqueiSprites.png", {
      frameWidth: 44,
      frameHeight: 52,
    });
    this.load.image("imgEma", "img/idle-ema.png");
    this.load.image("tiroEma", "img/tiro-ema.png");
    this.load.image("caixaRemedio", "img/tiro-inimigo2.png");
    this.load.image("cartelaRemedio", "img/tiro-inimigo.png");
    this.load.audio("soundJogar", "sounds/inicio-jogo.wav");
  }
  create() {}
  update() {}
}
