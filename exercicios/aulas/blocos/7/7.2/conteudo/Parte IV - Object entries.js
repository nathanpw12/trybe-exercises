// Outro método muito útil para se trabalhar com objetos é o Object.entries . Um pouco diferente dos métodos apresentados anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. 

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

//                          Convertendo um Object em um Map

// O construtor new Map() aceita entradas iteráveis. Com o Object.entries, você pode facilmente converter de Object para Map:

const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

// maps doc:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map