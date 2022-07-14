this.state = {
  meuEstadoExemplo: 'declarando um estado qualquer'
}


/////////// atualizando esse estado com o setState ////////


this.setState({
  meuEstadoExemplo: 'representa o novo estado'
})

//////////// Logíca de assincronisidade //////////

handleClick() {
  /* Passando uma callback à função setState, que recebe de parâmetros
  o estado anterior e as props do componente, você garante que as atualizações
  do estado acontecerão uma depois da outra! */
  
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  }))
};

// _props segnifica q não usaremos nenhuma props , porém declarar esse parametro é obrigatorio. nao podemos deixar de escrever em caso de nao uso , mas sim usar o _props