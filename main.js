const containerCards = document.querySelectorAll('.container-card');
const myButton = document.querySelector('.myButton');

containerCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const categoria = event.currentTarget.getAttribute('data-categoria');
    event.currentTarget.classList.toggle('selected');
    const itensSelecionados = document.querySelectorAll(`.selected[data-categoria="${categoria}"]`);
    itensSelecionados.forEach((item) => {
      if (item !== event.currentTarget) {
        item.classList.remove('selected');
      }
    });

    // Verifica quantos elementos de cada categoria estão selecionados
    const frangoSelecionado = document.querySelectorAll('.selected[data-categoria="A"]').length > 0;
    const massaSelecionada = document.querySelectorAll('.selected[data-categoria="B"]').length > 0;
    const saladaSelecionada = document.querySelectorAll('.selected[data-categoria="C"]').length > 0;

    // Se houver pelo menos um elemento selecionado em cada categoria, adiciona a classe para mudar a cor do botão
    if (frangoSelecionado && massaSelecionada && saladaSelecionada) {
      myButton.classList.add('myButtonSelected');
      myButton.textContent = 'Todos selecionados!';
      console.log('Selecionado')
    } else {
      myButton.classList.remove('myButtonSelected');
      console.log('nao selecionado')
    }
  });
});
