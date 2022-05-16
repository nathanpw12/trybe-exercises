// A função sort permite ordenar um array de acordo com alguma condição estabelecida.

// Caso utilize o sort(); em um array de strings sem declarar nenhum parametro , o array será ordenado em ordem alfabética.

const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Se tentarmos fazer o mesmo com um array de numeros, eles não seram ordenados  em ordem crescente:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// Para isso é preciso implementar uma condição como parametro do sort();

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares (elemento1, elemento2), e vai comparando-os.
// O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */).
// Ou seja: para o array [1, 2, 3, 4], a função receberá (2, 1), (3, 2), (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1.

// Então para ordem decrecente:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Fixar:

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

people.sort((age1, age2) => age1.age - age2.age);

console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people.sort((age1, age2) => age2.age - age1.age);

console.log(people);
