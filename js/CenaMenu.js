export class CenaMenu extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaMenu",
    });
  }
  preload() {}
  create() {
    const imagemFundo = this.add.image(0, 0, "fundo").setScale(3, 3);
    const imagemTitulo = this.add
      .image(120, 80, "titulo")
      .setScale(0.8, 0.8)
      .setOrigin(0, 0);
    const imagemJogar = this.add
      .image(340, 450, "btnJogar")
      .setScale(0.5, 0.5)
      .setOrigin(0, 0)
      .setInteractive();

      const imagemEma = this.add.image(150,430,"imgEma");

    imagemJogar.on("pointerdown", (pointer) => {
      imagemJogar.setScale(0.6, 0.6);
      this.scene.start("CenaJogo");
    });

    imagemJogar.on("pointerout", (pointer) => {
      imagemJogar.setScale(0.5, 0.5);
    });

    imagemJogar.on("pointerup", (pointer) => {
      imagemJogar.setScale(0.5, 0.5);
    });
  }
  update() {}
}
