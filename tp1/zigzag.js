function lineanegra(desplazamientoY) {
 let angulo = obtenerAngulo();
  for (let j = 0; j < 1; j++) {
    for (let i = 0; i < 12; i++) {
      let horizontal = 400 + i * 40;

      for (let y = -30; y < height + 20; y += 8) {
        let corto = map(y, 0, height, 0, 15);
        let largo = map(y, 0, height, 35, 20);

        push();
        
        translate(horizontal, y + desplazamientoY); 
        rotate(angulo); 
        line(0, 25, 5 + corto, -8);
        line(5 + corto, -8, 5 + corto + largo, 10);

        pop();
      }
    }
  }
}
function obtenerAngulo() {
  return map(mouseX, 0, width, -PI/4, PI/4);
}
