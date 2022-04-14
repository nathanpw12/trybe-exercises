// O let e o const vieram como solução para um antigo problema do JavaScript de falta de definição de escopo de variáveis. Sabe quando você declara uma variável dentro de um bloco e depois a utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre trouxe grandes prejuízos, principalmente para aplicações maiores. Saber utilizar o let e o const de maneira consistente irá te ajudar a ter um código mais confiável e previsível.

// Qual a diferença entre as declarações de varíaveis?

// Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o 'local' em que uma variável é visível e pode ser referenciada. Como exemplo, observe a função abaixo:

function userInfo() {
  let userEmail = "maria@email.com";

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

// Se tentarmos usar a let "userEmail" fora da function userInfo , ela será declarada como nao declarada , e isso acontece com const e var tambem

//                            Var

// As var tem o problema de vazamento de escopo, em que se vc usar um if ou um for por exemplo dentro de uma funçao  e chamar a variavel fora do escopo deles , ocorrera um vazemnto de escopo da var
// exemplo

function minhaIdade() {
  for (var idade = 21; idade <= 40; idade += 1) {
    console.log(idade);
  }
  console.log("Vazamento de escopo:", idade); // esse log vazará o escopo
}
minhaIdade();

//                             let

// esse vazamento de escopo pode ser consertado com a let

function minhaIdade2() {
  for (let idade2 = 21; idade2 <= 40; idade2 += 1) {
    console.log(idade2);
  }
  console.log("Vazamento de escopo:", idade2); // esse log exibira um erro pois a let esta fora do escopo do for , e sera dada como nao definida
}
minhaIdade2();

//                          const

// a const é uma variavel que nao pode ter seu valor alterado:

const nathan = "muito lindo";
const nathan = "muito feio"; // essa segunda const , irá dar um erro dizendo que 'nathan' ja está declarado

// Mas podemos mudar as propriedades de uma const , exemplo , quando ela é um objeto:

const euzinho = {
  qualidaes: "lindo, perfeito",
  defeitos: "nenhum",
};

euzinho.qualidaes = "qualidades: não ter defeitos";
console.log(euzinho);


// Enfim,  QUANDO USAR LET , VAR E CONST?

// Var = NUNCA 
// let = SEMPRE, que precisar de uma variavel q seu valor possa ser reatribuido
// Const = SEMPRE , que precisar de uma certa constancia , eu diaria :)