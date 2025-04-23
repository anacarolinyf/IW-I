const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const mensagem = document.getElementById("mensagem");

function atualizarEstado(estado) {
  if (estado === "ligada") {
    lampada.src = "img/ligada.jpeg";
    lampada.alt = "Lampada Ligada";
    mensagem.innerText = "A lampada está ligada";
    btnLigar.disabled = true;
    btnDesligar.disabled = false;
  } else {
    lampada.src = "img/desligada.jpeg";
    lampada.alt = "Lampada Desligada";
    mensagem.innerText = "A lampada está desligada";
    btnLigar.disabled = false;
    btnDesligar.disabled = true;
  }
}

btnLigar.addEventListener("click", () => atualizarEstado("ligada"));
btnDesligar.addEventListener("click", () => atualizarEstado("desligada"));

lampada.addEventListener("mouseover", () => atualizarEstado("ligada"));
lampada.addEventListener("mouseout", () => atualizarEstado("desligada"));

// Estado inicial
atualizarEstado("desligada");