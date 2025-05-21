// Seleciona o elemento da imagem
const imagem = document.getElementById('imagem');

// Adiciona eventos aos botões
document.getElementById('btn1').addEventListener('click', function() {
  imagem.src = 'sol.jpeg';
});

document.getElementById('btn2').addEventListener('click', function() {
  imagem.src = 'lua.jpeg';
});

document.getElementById('btn3').addEventListener('click', function() {
  imagem.src = 'rj.jpeg';
});
