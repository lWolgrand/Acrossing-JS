let roadImage;
let atorImage;
let carImage;
let carImage2;
let carImage3;

let trilhaJogo;
let pontoSom;
let perdeSom;

function preload(){
    roadImage = loadImage("imagens/estrada.png");
    atorImage = loadImage("imagens/ator-1.png");
    carImage = loadImage("imagens/carro-1.png");
  carImage2 = loadImage("imagens/carro-2.png");
  carImage3 = loadImage("imagens/carro-3.png");
  carImages = [carImage, carImage2, carImage3,carImage, carImage2, carImage3]
  
  trilhaJogo = loadSound("sons/trilha.mp3");
  pontoSom = loadSound("sons/pontos.wav");
  perdeSom = loadSound("sons/colidiu.mp3");
  
}
