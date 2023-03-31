const containerCards = document.querySelectorAll('.container-card');
const myButton = document.querySelector('.myButton');

const modal = document.querySelector('.modal-box');
const btnsend = document.getElementById('btn-send');
const btncancel = document.getElementById('btn-cancel');


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


    function enviarMessage(message) {
      var numeroTelefone = "5511999999999"; // Substitua pelo número de telefone desejado, 
      var mensagemCodificada = encodeURIComponent(message);
      var linkWhatsapp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;
      window.open(linkWhatsapp); // Abre o link em uma nova aba
    }

    function enviarPedido() {
      modal.style.display = 'flex'; //ativa modal
      btncancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      btnsend.addEventListener('click', () => {
        var nome = prompt("Qual é o seu nome?");
        var rua = prompt("Qual é a sua rua?");      
        var mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27,70\n${nome}\n+${rua}`;
        enviarMessage(mensagem)
      });

    }

    if (frangoSelecionado && massaSelecionada && saladaSelecionada) {
      myButton.classList.add('myButtonSelected');
      myButton.textContent = 'Fechar pedido';
      myButton.addEventListener('click', enviarPedido);
    } else {
      myButton.classList.remove('myButtonSelected');
      myButton.innerHTML = 'Selecione os 3 itens <br/> para fechar o pedido';
      myButton.removeEventListener('click', enviarPedido);
    }
  });
});



