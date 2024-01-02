let imagem = document.querySelector(".img-home");
let circulo = document.querySelector(".circulo");

function trocaImagem(endereco) {
  imagem.src = endereco;
}

function trocaCor(cor) {
  circulo.style.background = cor;
}
