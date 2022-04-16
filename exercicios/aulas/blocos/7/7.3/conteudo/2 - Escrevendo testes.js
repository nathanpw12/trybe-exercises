// Para escrever testes em jest vamo precisar da função

test;

// ou

it; // alias de test

//                                           A função test espera três argumentos.

// 1 - O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados.

// 2 - O segundo argumento é uma função contendo suas expectations . Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos.

// 3 -  O terceiro argumento (opcional) é um timeout , indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

// exemplo

//  sum.js
const sum = (a, b) => a + b;

test("sums two values", () => {
  expect(sum(2, 3)).toEqual(5);
});

//  Jest procura por arquivos com as extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , ou arquivos com o sufixo .test ou .spec . É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js

// sum.js

const sum = (a, b) => a + b;

module.exports = sum;   //  module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos

// sum.test.js

const sum = require('./sum');  // utilizamos require('./sum') para importar a função sum

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});


