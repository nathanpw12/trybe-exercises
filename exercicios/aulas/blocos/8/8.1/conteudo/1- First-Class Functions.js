// Fist-Class Funcitons são funções que podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções.
// First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, 'permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro)'
// ex:

function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

// Quando utilizamos arrow functions , estamos justamente utilizando da capacidade do javascript de conseguir armazenar a função dentro de uma variável:

const sum = (number1, number2) => {
  return number1 + number2;
};

// Passar funções como argumento para outras funções:

const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);


// Retornar uma função de outra função:

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));
