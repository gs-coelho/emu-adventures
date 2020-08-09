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
  }
  create() {}
  update() {}
}
