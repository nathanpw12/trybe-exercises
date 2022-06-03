// Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// No momento, vamos focar em APIs baseadas na web, como esta vista no modelo abaixo. Essas APIs retornam dados em response (resposta) a um request (requisição) do cliente, nos permitindo acesso a dados de fontes externas.

// APIs também nos permitem compartilhar dados com outros sites ou aplicações. Você já deve ter observado a opção de "Compartilhar no Facebook" ou "Compartilhar no Twitter". No momento em que você clica nessa opção, a aplicação que você está visitando se comunica com sua conta do Twitter ou Facebook e altera os dados do seu status, por exemplo, através de uma API.

// O que é JSON e por que o usamos?

// JSON significa JavaScript Object Notation e é basicamente uma forma de representarmos dados como objetos Javascript:

{
  "trybers"; [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}

// compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras. Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.

// Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse(), assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.