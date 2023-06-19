function exibirDetalhesJogador() {
    const detalhesJogador = JSON.parse(getDetalhesJogador());

    const imagemJogador = document.getElementById('imagem_jogador');
    const nomeJogador = document.getElementById('nome_jogador');
    const posicaoJogador = document.getElementById('posicao_jogador');
    const elencoJogador = document.getElementById('elenco_jogador');
    const nascimentoJogador = document.getElementById('nascimento_jogador');
    const nomeCompletoJogador = document.getElementById('nome_completo_jogador');
    const alturaJogador = document.getElementById('altura_jogador');
    const descricaoJogador = document.getElementById('descricao_jogador');

    imagemJogador.src = detalhesJogador.imagem;
    nomeJogador.textContent = detalhesJogador.nome;
    posicaoJogador.textContent = `Posição: ${detalhesJogador.posicao}`;
    elencoJogador.textContent = `Elenco: ${detalhesJogador.elenco}`;
    nascimentoJogador.textContent = `Nascimento: ${detalhesJogador.nascimento}`;
    nomeCompletoJogador.textContent = `Nome Completo: ${detalhesJogador.nome_completo}`;
    alturaJogador.textContent = `Altura: ${detalhesJogador.altura}`;
    descricaoJogador.textContent = detalhesJogador.descricao;
  }

  function getDetalhesJogador() {
    const cookieDetalhesJogador = document.cookie.replace(/(?:(?:^|.*;\s*)detalhesJogador\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const sessionStorageDetalhesJogador = sessionStorage.getItem('detalhesJogador');
    const localStorageDetalhesJogador = localStorage.getItem('detalhesJogador');

    if (cookieDetalhesJogador) {
      return cookieDetalhesJogador;
    } else if (sessionStorageDetalhesJogador) {
      return sessionStorageDetalhesJogador;
    } else if (localStorageDetalhesJogador) {
      return localStorageDetalhesJogador;
    } else {
      return null;
    }
  }

  exibirDetalhesJogador();