// A declaração de um objeto acontece da mesma forma que a de uma variável <<<<<<<

// let singer = {
//     propriedade_1: 'array',
//     propriedade_2: 'string',
//     propriedade_3: 'number',
//     propriedade_4: 'boleam'
// };

// As propriedades de um objetos podem ser, strings, numbers, arrays, boleanos...
// e ate mesmo outro objeto:

let singer = {
  propriedade_1: "array",
  propriedade_2: "string",
  propriedade_3: "number",
  propriedade_4: "boleam",
  subPropriedades: {
    subPropriedade_1: "objetos",
    subPropriedade_2: "exemplo",
    subPropriedade_3: "exemplo1",
  },
};

//Como acessar as propriedades de um objeto //

// 1- notação por ponto

console.log("Exemplo 1: " + singer.propriedade_1 + " " + singer.propriedade_2);

// E para acessar propriedades de objetos dentro de objetos, segue a mesma logica:

console.log(
  "Exemplo 2: " +
    singer.subPropriedades.subPropriedade_1 +
    " " +
    singer.subPropriedades.subPropriedade_2
);

// 2- notação por colchetes

singer["propriedade1"];

// Como adicionar propriedades de um objeto

singer["propriedade_5"] =
  "Propriedade 5 é a a junçao de outras duas: " +
  singer.propriedade_1 +
  " " +
  singer.propriedade_2;

console.log(singer.propriedade_5);
// nota-se que a propriedade 5 nao existe no objeto singer, caso existi-se, seria sobrescrita e não criada.

// As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes . Se você usar a notação de ponto , ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

let diasDaSemana = {
  : 'domingo',
  : 'segunda',
  : 'terça',
  : 'quarta',
  : 'quinta',
  : 'sexta',
  : 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo