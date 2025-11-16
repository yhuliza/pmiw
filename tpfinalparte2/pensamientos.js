class Pensamientos {
    constructor (){
      this.posX = 0;
      this.posY = 0;
      this.velocidad = 2;
      this.colision = true;
      this.tam = 80;
    }

 mostrarPositivo (){
  image(imagen[4],this.posX, this.posY,80,80);
  
}
  mostrarNegativo (){
  image(imagen[5],this.posX, this.posY,80,80);
}
//ayuda a reiniciar los pensamientos cuando sale de la pantalla
  aparece(){
  this.posY += this.velocidad;
  if (this.posY > height + 50) {
  this.posY = -50;
  this.posX= random(width);
  }
  }
}
