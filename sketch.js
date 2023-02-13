function setup() {
  createCanvas(700, 400);
  somDaTrilha.loop ();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor ();
  mostraCarro ();
  movimentaCarro1 ();
  movimentaAtor ();
  voltaPosicaoInicialDoCarro ();
  verificaColisao();
  
  movimentaCarro2 ();
  mostraCarro2 ();
  voltaPosicaoInicialDoCarro2 ();
  verificaColisao2();
  incluiPontos ();
  marcaPonto ();

}