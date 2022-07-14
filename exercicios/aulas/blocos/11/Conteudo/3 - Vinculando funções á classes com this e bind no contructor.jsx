/////////////// 1- Acessando uma função nossa dentro da classe /////////////////

// Para que usar uma função criada DENTRO de uma classe em um eventListener (onClick, onDBClick) precisamos usar o this antes de chamar a função:
class App extends React.Component {
 
  minhaFuncao() {
    console.log('Lógica da função')
  }

  render() {                             // usar o this //
    return <button type="button" onClick={this.minhaFuncao}>Meu botão</button>;
  }
}

//////////////////////////// 2- Constructor ////////////////////////////////////

//é possível adicionar aos construtores das classes React comportamentos e lógica extras!
class App extends React.Component {
 
  constructor() {
    super()
  }

  render() {
    return <span>Meu componente!</span>
  }
}

///////////////////////////// 3- this //////////////////////////////////////////

// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente.

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

// console.log(this);

// App {
//   context: {}
//   props: {}
//   refs: {}
//   state: null
//   updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
//   _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
//   _reactInternalInstance: {_processChildContext: ƒ}
//   isMounted: (...)
//   replaceState: (...)
//   __proto__: Component
//     constructor: class App
//     isMounted: (...)
//     render: ƒ render()
//     replaceState: (...)
//     __proto__: {...}
//   // ... Continua
//   }

//////////////////////////// 4- bind //////////////////////////////////////////

// se usar o this igual no primeiro exemplo teremos alguns problemas com ele, então precisamos fazer um vinculo manual da funçaõ com this a partir do contructor super():

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }
}
