//ator
let yAtor = 370;
let xAtor = 90;
let colide = false;
let points = 0;

function showAtor (){
  image(atorImage, xAtor, yAtor, 25, 25)
}
function atorMove(){
  if(keyIsDown(UP_ARROW)){    
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yAtor += 3;
  }
}
}

function colideVerify(){
  
  for(let i = 0; i < carImages.length; i++){
  colide = collideRectCircle(xCar[i],yCar[i],wCar,hCar, xAtor, yAtor, 15)
  if(colide){
    resetAtor(); 
    if(mZero()){
    points -= 1;
      perdeSom.play();
    }
  }
  }
}
function resetAtor(){
  yAtor = 370;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(44,40,244))
  text(points, width / 5, 25)
  
}
function marcaPontos(){
  if(yAtor < 15) {
    points += 1;
   resetAtor();
    pontoSom.play();
  }
}
function mZero() {
  return points > 0;
}
function podeMover () {
  return yAtor < 370;
}