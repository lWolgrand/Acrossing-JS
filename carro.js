let xCar = [420, 420, 420,420, 420, 420];
let yCar = [40, 100, 150, 215, 260, 320];
let carSpeed = [2, 5, 7, 4, 2.2, 4.7];
let wCar = 50;
let hCar = 40;

function showCar(){
  for( let i = 0; i < carImages.length; i++){
  image(carImages[i], xCar[i], yCar[i], wCar, hCar)

  }
}
function carMove(){
    for( let i = 0; i < carImages.length; i++){
    xCar[i] = xCar[i] -= carSpeed[i];

  }
}
function resetCar(){
  
  for(let i = 0; i < carImages.length; i++)
  
  if(acrossScreen(xCar[i])){
    xCar[i] = 600;
  } 
}


function acrossScreen(xCar){
  return xCar < -30;
}
