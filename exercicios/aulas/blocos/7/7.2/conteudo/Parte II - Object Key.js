// O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto
// exemplo:

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// invez de usar:

// for (const property in coolestTvShow) {
//   console.log(property);
// }

c Podemos usar:

console.log(Object.keys(coolestTvShow));

//                                       Exemplo de como o object.keys funciona :

var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

//        Suporte do object keys para  ambientes que não o tem de forma nativa

// De https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (
        typeof obj !== "object" &&
        (typeof obj !== "function" || obj === null)
      ) {
        throw new TypeError("Object.keys chamado de non-object");
      }

      var result = [],
        prop,
        i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}

// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`
    );
  }
};

console.log("Estudante 1");
listSkills(student1);

console.log("Estudante 2");
listSkills(student2);
