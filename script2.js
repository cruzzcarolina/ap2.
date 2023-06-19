function exibirJogadores() {
    const elencoFeminino = document.getElementById('elenco_feminino');
    const elencoMasculino = document.getElementById('elenco_masculino');

    for (let i = 0; i < jogadores.length; i++) {
      const jogador = jogadores[i];
      const elementoJogador = document.createElement('div');
      elementoJogador.className = 'jogador';

      const imagem = document.createElement('img');
      imagem.src = jogador.imagem;

      const nome = document.createElement('p');
      nome.textContent = jogador.nome;

      elementoJogador.appendChild(imagem);
      elementoJogador.appendChild(nome);

      elementoJogador.addEventListener('click', function() {
        armazenarDetalhesJogador(jogador);
        window.location.href = 'detalhes.html';
      });

      if (jogador.elenco === 'feminino') {
        elencoFeminino.appendChild(elementoJogador);
      } else if (jogador.elenco === 'masculino') {
        elencoMasculino.appendChild(elementoJogador);
      }
    }
  }

  function armazenarDetalhesJogador(jogador) {
    const detalhesJogador = {
      imagem: jogador.imagem,
      nome: jogador.nome,
      posicao: jogador.posicao,
      elenco: jogador.elenco,
      nascimento: jogador.nascimento,
      nome_completo: jogador.nome_completo,
      altura: jogador.altura,
      descricao: jogador.descricao
    };

    document.cookie = `detalhesJogador=${JSON.stringify(detalhesJogador)}`;
    sessionStorage.setItem('detalhesJogador', JSON.stringify(detalhesJogador));
    localStorage.setItem('detalhesJogador', JSON.stringify(detalhesJogador));
  }

  exibirJogadores();