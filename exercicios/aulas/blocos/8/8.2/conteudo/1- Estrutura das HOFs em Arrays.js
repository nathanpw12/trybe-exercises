// Estrutura das HOFs em Arrays

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }


arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF, pode ser, .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada


// Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array. Em português, é como se:

meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});

// Significasse Verifique se cada elemento do meu array é múltiplo de 2.
// Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco. 

// Os parametros das arrow functions em um HOF  são:

const arrayOfValuess = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// A arrow function passada para o forEach possui element, index e array como parâmetros, onde:
// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.