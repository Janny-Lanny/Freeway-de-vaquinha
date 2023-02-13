//Ator
let yAtor = 370;
let xAtor  = 200;
let colisao = false;
let meusPontos = 0;

function mostraAtor (){
  image(imagemDoAtor, xAtor, yAtor, 30, 25);
}

function movimentaAtor (){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    	yAtor += 3;
  	}
  }
  
}
//collideRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
function verificaColisao (){
	for (let i = 0; i <imagensCarros.length; i++){
      colisao = collideRectCircle (xCarros[i], yCarros[i], cumprimentoCarro, alturaCarro, xAtor,yAtor, 10)
      if (colisao){
        voltaAtorPosicaoInicial ();
        somDaColisao.play();
        if (meusPontos > 0){
        	meusPontos -= 1;
        }
      }
    }
}
function verificaColisao2 (){
	for (let i = 0; i <imagensCarros2.length; i++){
      colisao = collideRectCircle (xCarros2[i], yCarros2[i], cumprimentoCarro2, alturaCarro2, xAtor,yAtor, 15)
      if (colisao){
        voltaAtorPosicaoInicial();
        somDaColisao.play();
        if (meusPontos > 0){
        	meusPontos -= 1;
        }
      }
    }
}
function voltaAtorPosicaoInicial (){
  yAtor = 370;
}

function incluiPontos (){
  fill(color(255,255,255))
  textAlign (CENTER);
  textSize (25)
  text(meusPontos, width / 6 , 27)
}
function marcaPonto(){
  if (yAtor < 4){
    meusPontos +=1;
    voltaAtorPosicaoInicial ();
    somDoPonto.play ()
  }
}
function podeSeMover (){
  return yAtor < 370;
}