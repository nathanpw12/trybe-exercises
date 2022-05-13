// Callback

// é função passada como parametro para uma função e sera retornada em algum momemento do codigo

function obdecerMae(tarefasQueMaePassou) {
  if (finalizeiVideoGame || maeJogouChinelo) {
    tarefasQueMaePassou();
  }
}

function tarefasQueMaePassou() {
  lavarVasilha();
  varrerCasa();
  jogarNaMegaSena([1, 2, 4, 6, 8]);

  if (estouComFome) {
    compraPao();
  }
}

filho.obdecerMae(tarefasQueMaePassou);

// filho = objeto
// obdecerMae = HOF key de filho
// tarefasQueMaePassou = callback de obdecerMae
