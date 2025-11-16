class Juego {
  constructor () {
    this.fondo=new Fondo();
    this.crearPersonaje();
    this.cantpensamientos = 15;
    this.crearpensamientos();
    this.puntos = 0;
  }
  
dibujar() {
  this.fondo.dibujarFondo();
  if(this.fondo.estado===1){
  this.ganarperder();
  this.personaje.mostrarpersonaje();
    for (let i = 0; i < this.cantpensamientos; i++) {
      let p = this.pensamientos[i];
      p.aparece();
      if (i % 2 === 0) { 
        p.mostrarPositivo();
      } else {
        p.mostrarNegativo();
      }
      //calculo distancia buscando el centro para colision
      let d = dist(
        this.personaje.canasto.posX + this.personaje.canasto.ancho/2, this.personaje.canasto.posY + this.personaje.canasto.alto/2,
        p.posX + p.tam/2, p.posY + p.tam/2
      );
      
      if (d < 30) {  
        if (i % 2 === 0) {
          this.puntos++;           
        } else {
          this.personaje.vida--;   
        }
        // reiniciar pensamiento
        p.posY = -50;
        p.posX = random(width);
      }
    }
    textSize(24);
   
    fill(255);
    text("Puntos: " + this.puntos, 60, 25);
    text("Vidas: " + this.personaje.vida, 52, 50);
  }
}
  
  crearpensamientos(){
    this.pensamientos = [];
    for (let i = 0; i < this.cantpensamientos; i++) {
      let p = new Pensamientos();
      p.posX = random(width);
      p.posY = random(-600, 0);
      p.velocidad = random(1, 4);
      this.pensamientos[i] = p; 
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje();
  }
  
  teclapresionada(keyCode){
    if(this.fondo.estado===1){
    this.personaje.teclapresionada(keyCode);
  }
  }
  presionar(mouseClicked){
  this.fondo.botondefondo(this);
  }
  ganarperder() {
 if(this.personaje.vida <=0){
  this.fondo.estado=7;
 }
  else if (this.puntos>=5){
  this.fondo.estado=6;
  }
  }
  reiniciarJuego(){
  this.crearPersonaje();
  this.crearpensamientos();
  this.puntos=0;
  }
}
