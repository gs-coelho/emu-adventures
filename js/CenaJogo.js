export class CenaJogo extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaJogo",
    });
  }
  preload() {}
  create() {
    const imagemFundo = this.add.image(0, 0, "fundo").setOrigin(0, 0);
    const chao = this.physics.add.staticGroup();
    chao
      .create(0, 500, "chao")
      .setOrigin(0.0)
      .setScale(2.25, 2.25)
      .refreshBody();

    this.teclas = this.input.keyboard.createCursorKeys();
  }
  update() {}
}
