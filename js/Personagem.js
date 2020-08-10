export default class Personagem {
  constructor(cena, idImg, xInicial, yInicial) {
    this.cena = cena;
    this.sprite = cena.physics.add
      .sprite(xInicial, yInicial, idImg)
      .setOrigin(0, 0);
    this.sprite.setScale(2, 2);
    this.sprite.body.setSize(24, 16);
    this.sprite.refreshBody();
    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true);

    cena.anims.create({
      key: "direita",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "atoa",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    cena.anims.create({
      key: "pulando",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1,
    });

    cena.anims.create({
      key: "esquerda",
      frames: cena.anims.generateFrameNumbers(idImg, { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
