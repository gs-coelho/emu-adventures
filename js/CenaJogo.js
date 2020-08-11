import Ema from "./Ema.js";
import TawoKey from "./TawoKey.js";

export class CenaJogo extends Phaser.Scene {
  constructor() {
    super({
      key: "CenaJogo",
    });
  }
  preload() {}

  create() {
    this.game.config.pixelArt = true;

    const ceuFundo = this.add
      .image(0, 0, "ceu")
      .setScale(0.5, 0.5)
      .setOrigin(0, 0);
    const casasFundo = this.add.image(0, -232, "casas").setOrigin(0, 0);
    const chao = this.physics.add.staticGroup();
    chao.create(0, 464, "chao").setOrigin(0.0).setScale(0.5, 0.5).refreshBody();
    chao
      .create(720, 464, "chao")
      .setOrigin(0.0)
      .setScale(0.5, 0.5)
      .refreshBody();

    this.jogador = new Ema(this);
    this.jogador.parar();
    this.inimigo = new TawoKey(this);
    this.inimigo.parar();
    this.bolasDeCuspe = this.physics.add.group({ allowGravity: false });
    this.remedios = this.physics.add.group({ allowGravity: false });

    function cuspeAcertaInimigo(inimigo, bolaDeCuspe) {
      bolaDeCuspe.destroy();
      this.inimigo.tomarDano(6);
      if (this.inimigo.estaMorto == true) {
        this.physics.pause();
      }
    }

    function remedioAcertaEma(ema, remedio) {
      remedio.destroy();
      this.jogador.tomarDano(5);
      if (this.jogador.estaMorto == true) {
        this.physics.pause();
      }
    }

    this.physics.add.collider(this.jogador.sprite, chao);
    this.physics.add.collider(this.inimigo.sprite, chao);

    this.physics.add.overlap(
      this.inimigo.sprite,
      this.bolasDeCuspe,
      cuspeAcertaInimigo,
      null,
      this
    );

    this.physics.add.overlap(
      this.jogador.sprite,
      this.remedios,
      remedioAcertaEma,
      null,
      this
    );

    this.teclas = this.input.keyboard.createCursorKeys();
  }

  update() {
    const jogador = this.jogador.sprite;

    // setas da esquerda, direita (ou sem movimento)
    if (this.teclas.left.isDown) {
      this.jogador.andar("esquerda");
    } else if (this.teclas.right.isDown) {
      this.jogador.andar("direita");
    } else {
      // nem esquerda, nem direita - parado ou pulando
      jogador.setVelocityX(0);
      if (jogador.body.touching.down) {
        this.jogador.parar();
      }
    }

    // seta para cima fazendo pular, mas só se estiver no chão
    if (this.teclas.up.isDown && jogador.body.touching.down) {
      this.jogador.pular();
    }

    //seta para baixo fazendo abaixar, mas só se estiver no chão
    if (this.teclas.down.isDown && jogador.body.touching.down) {
      this.jogador.abaixar();
    }

    //espaço para cuspir
    if (this.teclas.space.isDown) {
      this.jogador.cuspir();
    }
  }
}
