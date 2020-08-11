import Personagem from "./Personagem.js";

const idImg = "tawoKey";

export default class TawoKey extends Personagem {
  constructor(cena) {
    super(cena, { id: idImg, scaleX: 3, scaleY: 3 }, { x: 700, y: 350 });
    this.criaAnimacoes(cena);

    this.estaMorto = false;
    this.saude = 90;

    this.iniciarCronogramadeTiros(5000);
  }

  criaAnimacoes(cena) {
    cena.anims.create({
      key: "tkAtoa",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 0, end: 1 }),
      frameRate: 20,
      repeat: -1,
    });

    cena.anims.create({
      key: "tkAtirandoBaixo",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "tkAtirandoAlto",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  parar() {
    this.sprite.setVelocityX(0);
    this.sprite.setFlip(true, false);
    this.sprite.anims.play("tkAtoa");
  }

  tomarDano(dano) {
    this.saude -= dano;
    if (this.saude <= 0) {
      this.estaMorto = true;
      this.morrer();
    }
  }

  morrer() {
    this.sprite.setTint(0xff0000);
  }

  iniciarCronogramadeTiros(ms) {
    setTimeout(() => {
      setInterval(() => {
        const altura = Math.round(Math.random()) === 1 ? "alto" : "baixo";
        this.atirar(altura);
      }, 7500);
    }, ms);
  }

  atirar(altura) {
    if (altura === "alto") {
      this.sprite.anims.play("tkAtirandoAlto");
      this.cena.remedios
        .create(this.sprite.x - 50, this.sprite.y - 30, "caixaRemedio")
        .setScale(0.5, 0.5)
        .refreshBody()
        .setVelocityX(-250);
      setTimeout(() => {
        this.sprite.anims.play("tkAtoa");
      }, 2000);
    } else if (altura === "baixo") {
      this.sprite.anims.play("tkAtirandoAlto");

      this.cena.remedios
        .create(this.sprite.x - 50, this.sprite.y + 30, "cartelaRemedio")
        .setScale(0.5, 0.5)
        .refreshBody()
        .setVelocityX(-250);
      setTimeout(() => {
        this.sprite.anims.play("tkAtoa");
      }, 2000);
    }
  }
}
