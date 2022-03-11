// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); //

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers[6]);
// console.log(numbers[7]);
// console.log(numbers[8]);
// console.log(numbers[9]);

// (codigo 2 ao 4 se dependem)

//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i in numbers) {
  sum += numbers[i];
}

console.log(sum);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = sum / numbers.length;
console.log(media);

//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("valor maior que 20");
} else if (media === 20) {
  console.log("valor igual a 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 5 -Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);

// resolução com for of

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (number of numbers) {
  if (number > maior) {
    maior = number;
  }
}
console.log(maior);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (i % 2 !== 0) {
    valor = i;
    console.log('impar');
  } else if ((valor > 0)) {
    console.log("par");
  } else {
    console.log("mdkasd");
  }
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers.length;

for (number of numbers) {
  if (number < menor) {
    menor = number;
  }
}
console.log(menor);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

for (let i = 0; i <= 25; i += 1){
  let i25 = i;
  console.log(i25);
}

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let i2 = 0; i2 <= 25; i2 += 1){
  let i25por2 = i2 / 2;
  console.log(i25por2);
}