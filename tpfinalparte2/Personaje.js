class Personaje {
  constructor () {
    this.posX=width/3;
    this.posY=height-100;
    this.vida=3
    this.velocidad=50;
    this.canasto=new Canasto();
  }
  mostrarpersonaje () {
    image(imagen[2], this.posX, this.posY, 200, 200);
    this.canasto.posX = this.posX-23;
    this.canasto.posY = this.posY-150;
    this.canasto.mostrarCanasto();
  }
  moverDerPersonaje () {
    this.posX+=this.velocidad;
    if (this.posX>width-200) {
      this.posX=width-200
    }
  }
  moverIzqPersonaje () {
    this.posX-=this.velocidad;
    if (this.posX<0) {
      this.posX=0;
    }
  }

  teclapresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzqPersonaje();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerPersonaje();
    }
  }
}
