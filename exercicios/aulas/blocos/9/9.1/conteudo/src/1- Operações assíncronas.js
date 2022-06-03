// Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada, é necessário que uma operação termine para que outra comece.

// Podemos fazer com que uma operação seja executada depois com o set timeout

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// O setTimeout tem dois parametros, o primeiro é uma arrow function que será executada, e o segundo é o tempo a esperar para executar a arrow function.
// Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1). Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.

setTimeout(() => {}, 2000);