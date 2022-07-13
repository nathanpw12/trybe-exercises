// As propriedades (props) são por elas que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função.
// Props é um objeto que todo componente tem , mas por padrão é vazio , imcrementamos esse objeto com o this.props para adicionar coisas ao componente.

import React from "react"; // 1 - importar o React
class nomeDaClass extends React.Component {
  render(){ 
    const {nome, sobrenome} = this.props;
    return (
      <>
      <h1>Meu nome é {nome} e meu sobrenome é {sobrenome}</h1>
      </>
    );
  }
}

export default nomeDaClass;

// Importar o componente em App

import nomeDaClass from "./4- Como criar classes";

function App() {
  return (
    <main>
      <nomeDaClass nome='Nathan' sobrenome='Vitor'/>
      <nomeDaClass nome='Lucas' sobrenome='Lucca'/>
      <nomeDaClass nome='João' sobrenome='Vitor'/>
      <nomeDaClass nome='Pedro' sobrenome='Augusto'/>
    </main>
  );
}
// export default App;