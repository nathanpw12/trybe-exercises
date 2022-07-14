class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// Explicação

// Usamos o contructor e super e dentro deles

constructor() {
  super()
  
}
// Usamos o this.state para declarar um estado:

constructor() {
  super()
  this.state = {
    estado: 0
  }
}

// Usamos o bind para nossa função conseguir acessar o this

constructor() {
  super()
  this.state = {
    estado: 0
  }
  this.handleClick = this.handleClick.bind(this);
}

// usamos o this.setState para declarar nosso estado na nossa função:
// Sempre usar this.setState({}) e nunca usar this.state = , na hora de setar o estado

handleClick() {
  this.setState({
    numeroDeCliques: 1
  })

// usamos o essa sintaxe para chamar o estado 

render() {
  return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
}