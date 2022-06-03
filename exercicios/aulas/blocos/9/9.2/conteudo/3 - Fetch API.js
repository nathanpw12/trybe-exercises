// A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch(), utilizada para fazer chamadas às URL's das APIs. Trata-se de uma função assíncrona, baseada em uma promise.

// A função fetch pode receber dois parâmetros:

// 1 - URL do serviço alvo da requisição;

// 2 - E, opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações por agora; nesse início, daremos essas informações para que você se acostume a usar o fetch().

// A função fetch é responsável por enviar requisições a APIs. Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.


// .then() e .cath()

// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono: o .then() e o .catch(). Vamos começar falando sobre o .then(). Para isso, vamos usar o fetch para fazer uma requisição assíncrona a uma API.

// Vamos criar uma função que faz um fetch apenas para um endpoint específico. Entenda endpoint, em se tratando de APIs, como sendo o caminho (url) que retorna alguma informação específica da API. Para isso, vamos usar como endpoint uma url que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).

// Antes de você ir para o código, como você vai rodar o código direto no Node e não no browser, será necessário instalar o node-fetch. Execute o comando abaixo caso você ainda não tenha o package.json: