export default class Personagem {
  constructor(cena, configImg, posicaoInicial) {
    this.cena = cena;
    this.sprite = cena.physics.add.sprite(
      posicaoInicial.x,
      posicaoInicial.y,
      configImg.id
    );

    if (configImg.largura && configImg.altura) {
      this.sprite.body.setSize(configImg.largura, configImg.altura);
    }

    if (configImg.scaleX && configImg.scaleY) {
      this.sprite.setScale(configImg.scaleX, configImg.scaleY);
    }
    this.sprite.refreshBody();
    this.sprite.setCollideWorldBounds(true);
  }
}
