// menu no celular
const botao = document.getElementById('menuBotao');
const lista = document.getElementById('menuLista');

botao.addEventListener('click', () => {
  const aberto = lista.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', aberto);
});

lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    lista.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
  }
});

// ano do rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
