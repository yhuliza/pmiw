//https://youtu.be/WW-Pkz9IiF4
//yhuliza orellana y brenda ruiz
//comision 1

let imagen = [];
let estado = 0;
let textos = [];
let fondo;
// Coordenadas para los botones de decisiones y continuar
let BX = 250;
let BY = 350;
let B_ANCHO = 100; 
let B_ALTO = 50;   


function preload () {
  for (let i= 0; i<15; i++) { 
    imagen[i] = loadImage ('data/img'+i+'.jpg');
  }
  textos = loadStrings('dialogo/dialogos.txt');
  fondo = loadSound('sonido/fondo.mp3'); 
}

function setup() {
  createCanvas (640, 480);
  fondo.setVolume(0.1);
}


function draw() {
 
  // 0: Portada
  if (estado === 0) {
    pantalla (imagen[0], textos[0], 200, 300, 250, 350, 100, 50, 'Iniciar');
    
} 
  // 1: Conversación inicial (Decisión 1: ACEPTAR / BUSCAR)
  else if (estado === 1) {
    pantalla (imagen[1], textos[1], 50, 50, 0, 0, 0, 0, ''); 
    drawTextoFondo();
    boton (BX-150, BY, 150, 50, 'ACEPTAR');
    boton (BX+50, BY, 150, 50, 'BUSCAR');
  } 
  // 2: Respuesta ACEPTAR (Continuar -> 4)
  else if (estado === 2) {
    pantalla(imagen[2], textos[2], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  } 
  // 3: Respuesta BUSCAR (Continuar -> 4)
  else if (estado === 3) {
    pantalla(imagen[3], textos[3], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  } 
  // 4: Conversación H: Sueño + Vecinas (Decisión 2: CONTINUAR / CUESTIONAR)
  else if (estado === 4) {
    pantalla (imagen[5], textos[4], 50, 50, 0, 0, 0, 0, ''); 
    drawTextoFondo();
    boton(BX-150, BY, 150, 50, 'CONTINUAR');
    boton (BX+50, BY, 150, 50, 'CUESTIONAR');
  } 
  // 5: Respuesta CONTINUAR CALMA (Continuar -> 7)
  else if (estado === 5) {
    pantalla(imagen[4], textos[5], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  } 
  // 6: Respuesta CUESTIONAR CALMA (Continuar -> 7)
  else if (estado === 6) {
    pantalla(imagen[6], textos[6], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 7: Conversación H: ¿Qué haremos? (Decisión 3: DEBER / ESPERANZA)
  else if (estado === 7) {
    pantalla (imagen [7], textos [7], 50, 50, 0, 0, 0, 0, ''); 
    drawTextoFondo();
    boton(BX-150, BY, 150, 50, 'DEBER');    // -> 9 (Hijas/Sacrificio)
    boton (BX+50, BY, 150, 50, 'ESPERANZA'); // -> 8 (Rutina/Resistencia)
  }
  // 8: Acto de Rutina (Continuar -> 10)
  else if (estado === 8) {
    pantalla (imagen [8], textos [8], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 9: Acto de Sacrificio (Continuar -> 10)
  else if (estado === 9) {
    pantalla (imagen [9], textos [9], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 10: Narración  (Continuar -> 11)
  else if (estado === 10) {
    pantalla (imagen [10], textos [10], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 11: Decisión Final (PAZ / ESPERANZA / PÁNICO)
  else if (estado === 11) {
    pantalla (imagen [10], textos [11], 50, 50, 0, 0, 0, 0, ''); // Sin botón de continuar
    drawTextoFondo();
    boton(BX - 180, BY, 130, 50, 'PAZ');      // -> 12 (Final Original)
    boton (BX - 25, BY, 130, 50, 'ESPERANZA'); // -> 13 (Final Bueno)
    boton (BX + 130, BY, 130, 50, 'PÁNICO');  // -> 14 (Final Malo)
  }
  // 12: FINAL PAZ (Continuar -> 15)
  else if (estado === 12) {
    pantalla (imagen [11], textos [12], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 13: FINAL ESPERANZA (Continuar -> 15)
  else if (estado === 13) {
    pantalla (imagen [12], textos [13], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 14: FINAL PÁNICO (Continuar -> 15)
  else if (estado === 14) {
    pantalla (imagen [13], textos [14], 50, 50, BX, BY, 150, 50, 'Continuar');
    drawTextoFondo();
  }
  // 15: Pantalla de Reinicio - FIN DE LA HISTORIA
  else if(estado === 15){
    pantalla (imagen [14],textos[16], 100, 200, BX+200, BY+60, 150, 50, 'Reiniciar');
    
  }
}
//Fondo negro para los textos
function drawTextoFondo() {
  fill(20, 20, 20, 180);
  rect(0, 150, 640, 150);
}

function mousePressed() {
    if (!fondo.isPlaying()) {
    fondo.loop(); // empieza y se mantiene infinito
  }
  // 0 -> 1 (Iniciar)
  if (estado === 0 && overMouse(250, 350, 100, 50)) {
    estado = 1;
  } 
  // 1 -> 2 (ACEPTAR) o 3 (BUSCAR)
  else if (estado === 1) {
    if (overMouse(BX - 150, BY, 150, 50)){
      estado = 2;}
    else if (overMouse(BX + 50, BY, 150, 50)) {
      estado = 3;}
  } 
  // 2 o 3 -> 4 (Continuar)
  else if (estado === 2 || estado === 3) {
    if (overMouse(BX, BY, 150, 50)) {
      estado = 4;}
  } 
  // 4 -> 5 (CONTINUAR CALMA) o 6 (CUESTIONAR CALMA)
  else if (estado === 4) {
    if (overMouse(BX - 150, BY, 150, 50)) {
      estado = 5;}
    else if (overMouse(BX + 50, BY, 150, 50)) {
      estado = 6;}
  } 
  // 5 o 6 -> 7 (Continuar)
  else if (estado === 5 || estado === 6) {
    if (overMouse(BX, BY, 150, 50)) {
      estado = 7;}
  }
  // 7 -> 9 (DEBER) o 8 (ESPERANZA)
  else if (estado === 7) {
    if (overMouse(BX - 150, BY, 150, 50)) {
      estado = 9;} 
    else if (overMouse(BX + 50, BY, 150, 50)) {
      estado = 8;} 
  }
  // 8 o 9 -> 10 (Narrador)
  else if (estado === 8 || estado === 9){
    if (overMouse(BX, BY, 150, 50)) {
      estado = 10;}
  }
  // 10 -> 11 (Decisión Final)
  else if (estado === 10) {
    if (overMouse(BX, BY, 150, 50)) {
      estado = 11;}
  }
  // 11 -> 12 (PAZ), 13 (ESPERANZA), 14 (PÁNICO)
  else if (estado === 11) {
    // PAZ (Izquierda)
    if (overMouse(BX-180, BY, 130, 50)){
      estado = 12; 
    }
    // ESPERANZA (Centro)
    else if (overMouse(BX-25, BY, 130, 50 )) {
      estado = 13; 
    }
    // PÁNICO (Derecha)
    else if (overMouse(BX + 130, BY, 130, 50)){
      estado = 14; 
    }
  }
  // 12, 13, 14 -> 15 (Continuar)
  else if (estado === 12 || estado === 13 || estado === 14) {
    if (overMouse(BX, BY, 150, 50)) { 
      estado = 15;
    }
  } 
  // 15 -> 0 (Reiniciar)
  else if (estado === 15){
    if (overMouse(BX+200, BY+60, 150, 50)){ 
      estado = 0; 
    }
  }
}
// Función para dibujar el botón
function boton(posx, posy, tamx, tamy, textoboton) {
  if (overMouse(posx, posy, tamx, tamy)) {
    fill (200, 0, 0); 
  } else {
    fill(200, 120, 0, 100); 
  }
  noStroke();
  rect(posx, posy, tamx, tamy, tamy/4);
  fill(100, 255, 0);
  textAlign(CENTER, CENTER);
  text(textoboton, posx+tamx/2, posy+tamy/2);
}

// Función para verificar si el mouse está sobre el botón
function overMouse(posx, posy, tamx, tamy) {
  return mouseX>posx && mouseX<posx+tamx && mouseY>posy && mouseY<posy+tamy;
}

// Función para dibujar la pantalla (Imagen y Texto)
function pantalla (imagen, texto, posx, posy, posxb, posyb, tamxb, tamyb, textoboton ) {
  image(imagen, 0, 0);
  fill (255);
  textSize(20);
  text(texto, posx, posy, width-posx*2, height-posy*2);
    boton(posxb, posyb, tamxb, tamyb, textoboton);
  
}
