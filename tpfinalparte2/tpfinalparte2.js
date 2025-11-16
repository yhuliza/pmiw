//https://youtu.be/LSV7PqvcmSk
//yhuliza orellana
//brenda ruiz
//comision 1
let imagen= [];
let sonido;
let objJuego;

function preload() {
  for (let i= 0; i<8; i++) {
    imagen[i] = loadImage ('data/imagen'+i+'.png');
  }
    sonido= loadSound('sonido/sonido.MP3');

}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
  sonido.setVolume(0.2);
}

function draw() {
  objJuego.dibujar();
 
}
  function keyPressed() {
  objJuego.teclapresionada(keyCode);
    }
    
  function mouseClicked(){
  objJuego.presionar(mouseClicked);
}
