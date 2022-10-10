re = new RegExp("^[a-z/s ]+$");

function apareceConteudo() {
  document.querySelector("#texto-final").value = "";
  document.querySelector("#texto-final").classList.add("mensagem");
  document.querySelector(".principal_texto-copiar").classList.add("mensagem");
  document.querySelector(".principal_tela-img").classList.add("mensagem");
}

function apareceTexto(novoTexto) {
  document.querySelector("#texto-final").classList.remove("mensagem");
  document.querySelector(".principal_texto-copiar").classList.remove("mensagem");
  document.querySelector(".principal_tela-img").classList.add("mensagem");
  document.querySelector("#texto-final").value = novoTexto;
  document.querySelector("#texto").value = "";
  document.querySelector("#texto").focus();
  Event.preventDefault();
}

function invalidaMsg() {
  document
    .querySelector("#texto")
    .setCustomValidity("Por favor, use letras minúsculas e sem acentos.");
}

function apagaMsg() {
  document.querySelector("#texto").setCustomValidity("");
}

document.querySelector("#botao_codific").addEventListener("click", () => {
  texto = document.querySelector("#texto").value;

  if (texto.match(re)) {

    let novoTexto = texto.replace(/e/g, "enter");
    novoTexto = novoTexto.replace(/i/g, "imes");
    novoTexto = novoTexto.replace(/a/g, "ai");
    novoTexto = novoTexto.replace(/o/g, "ober");
    novoTexto = novoTexto.replace(/u/g, "ufat");

      apareceTexto(novoTexto);
  } else if (!texto.match(re) && texto != "") {
    invalidaMsg();
    setTimeout(apagaMsg, 2000);
  }
});

document.querySelector("#botao_decodific").addEventListener("click", () => {
  texto = document.querySelector("#texto").value;

  if (texto.match(re)) {

      let novoTexto = texto.replace(/enter/g, "e");
      novoTexto = novoTexto.replace(/imes/g, "i");
      novoTexto = novoTexto.replace(/ai/g, "a");
      novoTexto = novoTexto.replace(/ober/g, "o");
      novoTexto = novoTexto.replace(/ufat/g, "u");

      apareceTexto(novoTexto);
  } else if (!texto.match(re) && texto != "") {
    invalidaMsg();
    setTimeout(apagaMsg, 2000);
  }
});

document.querySelector("#botao_copia").addEventListener("click", () => {
  textoCopiado = document.querySelector("#texto-final").value;

  if (textoCopiado != "") {
    textoCopiado = document.querySelector("#texto-final").select();
    document.execCommand("copy");
    apareceTexto("Texto copiado!");
    document.querySelector("#texto").focus();
    setTimeout(apareceConteudo(), 2000);
  }

});