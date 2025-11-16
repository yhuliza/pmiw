class Fondo {
constructor() {
    this.posX=0;
    this.posY=0;
    this.estado=0;
    this.botonX = width / 2;
    this.botonY = height / 2 + 50;
    this.botonAncho = 150;
    this.botonAlto = 40;
 
  }
  dibujarFondo() {
    if(this.estado === 0){
      image(imagen[0], this.posX, this.posY);
    }
    this.cambiodeFondo();
  }

  cambiodeFondo(){
   if(this.estado==0){
   this.dibujarBoton("COMENZAR");
   }
   else if (this.estado == 1){
   image(imagen[1],0,0);
   
   }
   //ganaste
   else if(this.estado == 6){
   image(imagen[6],0,0);
   this.dibujarBoton("REINICIAR");
 }
 //perdiste
 else if(this.estado == 7){
 image(imagen[7],0,0);
   this.dibujarBoton("REINICIAR"); 
 }
 }
 
 dibujarBoton(texto){
 fill(255,255,0)
 rectMode(CENTER);
 rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto,5);
 fill(0);
 textSize(15);
 textAlign(CENTER, CENTER);
 text(texto, this.botonX, this.botonY);
 }
 
 botondefondo(){
 let mouseDentro=(
 mouseX > this.botonX - this.botonAncho / 2 &&
 mouseX < this.botonX + this.botonAncho / 2 &&
 mouseY > this.botonY - this.botonAlto / 2 &&
 mouseY < this.botonY + this.botonAlto / 2
 );
 if(mouseDentro){
 if(this.estado==0){
 this.estado=1;
 objJuego.reiniciarJuego();
 if (sonido && !sonido.isPlaying()) 
  sonido.loop(); 
 }
 else if (this.estado == 6 || this.estado == 7){
 this.estado=0;
 objJuego.reiniciarJuego();
 }
 }
 }
}
