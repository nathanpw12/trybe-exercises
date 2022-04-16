// O módulo Assert 
// é uma ferramenta que testa expressões. Esse módulo já vem instalado com o NodeJS . Podemos entender o assert como sendo uma expressão booleana que será sempre true , a menos que haja uma falha

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEq ual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70. 