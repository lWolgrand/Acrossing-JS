function setup() {
  createCanvas(600, 400);
  trilhaJogo.loop();
}

function draw() {
  background(roadImage);
  showAtor();
  showCar();
  carMove();
  atorMove();
  resetCar();
  colideVerify();  
  incluiPontos();
  marcaPontos();
  mZero();
  
}


