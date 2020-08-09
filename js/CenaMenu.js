export class CenaMenu extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaMenu",
    });
  }
  preload() { }
  create() {
    const imagemFundo = this.add.image(0, 0, "fundo").setScale(3, 3);
    const imagemTitulo = this.add.image(120, 80, "titulo").setScale(0.8, 0.8).setOrigin(0, 0);
    const imagemJogar = this.add.image(340, 400, "btnJogar").setScale(0.5, 0.5).setOrigin(0, 0).setInteractive();

    imagemJogar.on('pointerdown', function (pointer) {
      console.log("vavva");
      imagemJogar.setScale(0.6, 0.6);
      scene.start("CenaJogo");
    });

    imagemJogar.on('pointerout', function (pointer) {

      imagemJogar.setScale(0.5, 0.5);

    });

    imagemJogar.on('pointerup', function (pointer) {

      imagemJogar.setScale(0.5, 0.5);

    });

  }
  update() { }
}
