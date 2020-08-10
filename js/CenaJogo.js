import Personagem from "./Personagem.js";

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

    this.jogador = new Personagem(this, "emu", 0, 0);

    this.physics.add.collider(this.jogador.sprite, chao);

    this.teclas = this.input.keyboard.createCursorKeys();
  }
  update() {
    const jogador = this.jogador.sprite;

    // setas da esquerda, direita (ou sem movimento)
    if (this.teclas.left.isDown) {
      jogador.setVelocityX(-160);
      jogador.setFlip(true, false);
      jogador.anims.play("esquerda", true);
    } else if (this.teclas.right.isDown) {
      jogador.setVelocityX(160);
      jogador.setFlip(false, false);
      jogador.anims.play("direita", true);
    } else {
      // nem esquerda, nem direita - parado ou pulando
      jogador.setVelocityX(0);
      if (jogador.body.touching.down) {
        jogador.anims.play("atoa");
        jogador.setScale(2, 2);
      }
    }

    // seta para cima fazendo pular, mas só se estiver no chão
    if (this.teclas.up.isDown && jogador.body.touching.down) {
      jogador.setVelocityY(-100);
      jogador.anims.play("pulando");
      jogador.setScale(2, 2);
    }

    if (this.teclas.down.isDown && jogador.body.touching.down) {
      jogador.anims.play("pulando");
      jogador.setScale(2, 1);
      jogador.refreshBody();
      this.jogador.estaPulando = true;
    }

    if (this.teclas.down.isDown && !jogador.body.touching.down) {
      jogador.setVelocityX(0);
      jogador.setVelocityY(100);
      jogador.anims.play("atoa");
      jogador.setScale(2, 2);
    }
  }
}
