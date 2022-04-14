// As arrow functions , além de deixar o código mais legível, quando bem utilizadas, ainda resolvem outro problema antigo do famigerado var that = this . Vamos ver esse problema com mais detalhes na sessão de conteúdos. 

// A sintaxe da arrow function é a seguinte

// 1

const arrowFunction = umParametroNaoPrecisaDeParenteses  =>  {
  return `${umParametroNaoPrecisaDeParenteses} exemplo 1`
}
console.log(arrowFunction('teste1'));

// 2 

const arrowFunction2 = (umParametroNaoPrecisaDeParenteses, masDoisSim) => {
  return `${umParametroNaoPrecisaDeParenteses} ${masDoisSim}  exemplo 2`
}
console.log(arrowFunction2('teste 2', 'teste 2'));

//  3 - Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves: 

const arrowFunction3 = oReturnEimplicitoNaArrowFunction => `${oReturnEimplicitoNaArrowFunction} exemplo 3`

console.log(arrowFunction3('teste 3'));

// 4 - declarar objeto em arrow function

// const objetoPessoas = (nome, idade)  => {nome:  Nathan,  idade:  21 } // dessa forma a funçao entende q a chave é para o corpo da função , entao o jeito certo é assim: 

const objetoPessoa =  (nome,   idade)  =>  ({Nome:  nome, Idade:  idade } )  // com  parenteses
 
console.log(objetoPessoa('nathan',  21));