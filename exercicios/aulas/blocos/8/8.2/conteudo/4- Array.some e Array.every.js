// O some verifica a condição e retorna true se alguem do array a favorecer e false se niguem favorecer.

// https://prnt.sc/mGyHL1DaM2lS

const ages1 = [12, 24, 49, 70];
const ages2 = [24, 49, 70];

const anyLessThan18 = (array) => array.some((age) => age < 18);

console.log(anyLessThan18(ages1)); // true
console.log(anyLessThan18(ages2)); // false

// O every verifica se todos do array favorecem a condição.

// https://prnt.sc/cfj3Lz5HpspQ

const everyLessThan18 = (array) => array.every((age) => age < 18);

const ages3 = [12, 14, 9, 7];
const ages4 = [24, 49, 70];

console.log(everyLessThan18(ages3)); // true
console.log(everyLessThan18(ages4)); // false
