//Código do carro
let xCarros2 = [0, 0, 0];
let yCarros2 = [207, 260, 315];
let velocidadeCarros2 = [5, 2.5, 3.6]
let cumprimentoCarro2 = 100;
let alturaCarro2 = 45;

function mostraCarro2 (){
  	for (let i = 0; i < imagensCarros2.length; i++){
  	image(imagensCarros2[i], xCarros2[i], yCarros2[i], cumprimentoCarro2, alturaCarro2);
	}
}

function movimentaCarro2 (){
  for  (let i = 0; i < imagensCarros2.length; i++){
  	xCarros2[i] += velocidadeCarros2[i];  
  }
}
function voltaPosicaoInicialDoCarro2 () {
  for (let i = 0; i < imagensCarros2.length; i++){
  	if (passouTodaTela2 (xCarros2[i])) {
      xCarros2[i] = -100;
  }
 }
}
function passouTodaTela2 (xCarros2){
  return xCarros2 > 715;
}