//Código do carro
let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [35, 90, 145, 210, 270, 318];
let velocidadeCarros = [2.5, 2, 3.2, 5, 3.3, 2.3]
let cumprimentoCarro = 100;
let alturaCarro = 45;

function mostraCarro (){
  	for (let i = 0; i < imagensCarros.length; i++){
  	image(imagensCarros[i], xCarros[i], yCarros[i], cumprimentoCarro, alturaCarro);
	}
}

function movimentaCarro1 (){
  for  (let i = 0; i < imagensCarros.length; i++){
  	xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicialDoCarro () {
  for (let i = 0; i < imagensCarros.length; i++){
  	if (passouTodaTela (xCarros[i])) {
      xCarros[i] = 715;
  }
 }
}
function passouTodaTela (xCarro){
  return xCarro < -100;
}