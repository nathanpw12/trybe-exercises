let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); //

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

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; //

// for(i = 0; i <= numbers.length-1; i += 1){
//   console.log(i)
// }

let sum = 0;

for(let i in numbers){
  sum += numbers[i];
}
console.log(sum);
// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;//
