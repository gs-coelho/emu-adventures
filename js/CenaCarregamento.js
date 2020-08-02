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
  }
  create() {}
  update() {}
}
