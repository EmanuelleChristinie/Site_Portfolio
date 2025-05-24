function mostrarSessao(id) {
  const secoes = document.querySelectorAll('.sessao');
  secoes.forEach(secao => {
    secao.classList.add('escondido');
  });

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.remove('escondido');
    ativa.classList.add('visivel');
  }
}
