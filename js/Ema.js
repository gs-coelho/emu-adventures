import Personagem from "./Personagem.js";

const idImg = "ema";

export default class Ema extends Personagem {
  constructor(cena) {
    super(
      cena,
      { id: idImg, scaleX: 0.5, scaleY: 0.5, largura: 280, altura: 280 },
      { x: 0, y: 350 }
    );
    this.criaAnimacoes(cena);

    this.estaMorto = false;
    this.saude = 15;
  }

  criaAnimacoes(cena) {
    cena.anims.create({
      key: "abaixando",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "cuspindo",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "atoa",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 12, end: 15 }),
      frameRate: 20,
      repeat: -1,
    });

    cena.anims.create({
      key: "pulando",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 18, end: 20 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "andando",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 24, end: 29 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "dano",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 30, end: 31 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  andar(direcao) {
    if (direcao === "esquerda") {
      this.sprite.setVelocityX(-160);
      this.sprite.setFlip(true, false);
      this.sprite.anims.play("andando", true);
    } else if (direcao === "direita") {
      this.sprite.setVelocityX(160);
      this.sprite.setFlip(false, false);
      this.sprite.anims.play("andando", true);
    }
  }

  pular() {
    this.sprite.setVelocityY(-200);
    this.sprite.anims.play("pulando");
  }

  abaixar() {
    this.sprite.anims.play("abaixando");
    this.estaAbaixando = true;
  }

  parar() {
    this.sprite.setVelocityX(0);
    this.sprite.setFlip(false, false);
    this.sprite.anims.play("atoa");
  }

  cuspir() {
    this.sprite.anims.play("cuspindo");
    this.cena.bolasDeCuspe
      .create(this.sprite.x + 50, this.sprite.y - 50, "tiroEma")
      .setScale(0.5, 0.5)
      .refreshBody()
      .setVelocityX(400);
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
}
