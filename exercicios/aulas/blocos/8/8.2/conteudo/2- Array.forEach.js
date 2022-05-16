//  o forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor.

// O for each percorre um array e para sua estrutura precisa de uma arrow function e pelo menos 1 parametro: 

// https://prnt.sc/wYiIZuSPRrjw

const nathanLindo = [1, 2, 'sim', 'nao'];

nathanLindo.forEach(
  (item, posicao, array) => {
    console.log(`O primeiro paramêtro são os elementos do array: ${item}} 
    O Segundo a posição do elementro no array: ${posicao} 
    E o terceiro paramêtro é o próprio array: ${array}`)
  }
)

// Exemplos: 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// ============================================================ //

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Fixar:

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach((item) => {
  showEmailList(item);
})