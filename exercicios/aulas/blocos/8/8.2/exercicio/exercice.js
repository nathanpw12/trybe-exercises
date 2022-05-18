const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// use find

const NameAuthorBirth1947 = books.find(
  (element) => element.author.birthYear == 1947
).author.name;

console.log(NameAuthorBirth1947);

// 2 - Retorne o nome do livro de menor nome. Dica: use a função forEach.

// function smallerName(array) {
//   let nameBook;

//   return nameBook;
// }

// console.log(smallerName(books));

// 5 -

// const books2 = [
//   {
//     id: 1,
//     name: "As Crônicas de Gelo e Fogo",
//     genre: "Fantasia",
//     author: {
//       name: "George R. R. Martin",
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: "O Senhor dos Anéis",
//     genre: "Fantasia",
//     author: {
//       name: "J. R. R. Tolkien",
//       birthYear: 1901,
//     },
//     releaseYear: 1954,
//   },
// ]

// const expectedResult = false;

// function everyoneWasBornOnSecXX(array) {
//   array.every((element) => {
//     if (element.author.birthYear >= 1901 && element.author.birthYear <= 2000) {
//       return true;
//     }
//   });
// }

// console.log(everyoneWasBornOnSecXX(books2));