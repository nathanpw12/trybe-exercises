// Podemos adicionar chaves nos objetos da seguinte forma:

objeto.nomeDaPropriedade .
objeto[variavelQueContemONomeDaPropriedade] .

// exemplo: 

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// Podemos adicionar novas propriedades  de acordo com o valor de algumas variáveis. 

// exemplo:

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. 

// let objeto = {
//   key1: 'primeira chave'
// }

// const key1Name = objeto.key1
// const key1Value = objeto.valueOf.key1

// function tresParametros () {
//   return objeto
// }
