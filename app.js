let tentativas = 1;
let numeroLimite = 15;
let lista = [];
let numero = gerarNumeroAleatorio(); // Inicializa a variável `numero` após a função ser definida
reiniciarTexto();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function reiniciarTexto() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número de 1 a 100");
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numero) {
    exibirTextoNaTela("h1", "Você acertou !!!!!");
    exibirTextoNaTela("p", "Foram " + tentativas + " tentativas");
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numero) exibirTextoNaTela("h1", "Número é menor");
    else exibirTextoNaTela("h1", "Número é maior");
    limparCampo();
    tentativas++;
  }
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function reiniciar() {
  numero = gerarNumeroAleatorio(); // Corrigido para usar o novo número gerado
  limparCampo();
  tentativas = 1;
  reiniciarTexto();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeNumero = lista.length;
  if (numeroLimite == quantidadeNumero) {
    lista = [];
  }
  if (lista.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    lista.push(numeroEscolhido);
    console.log(lista);
    return numeroEscolhido;
  }
}
