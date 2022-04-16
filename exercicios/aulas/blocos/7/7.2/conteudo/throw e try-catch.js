// O throw serve para interromper uma função quando um erro acontece:

const sum = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos");
  }
  return value1 + value2;
};

console.log(sum(2, "3"));

// A  palavra reservada throw
// serve para lançar uma exceção criada por você. No caso, definimos que não seria aceito um parâmetro que não fosse do tipo number , então criamos esse "erro customizado".

//  O operador new
// serve para criar um objeto personalizado ou nativo do JavaScript.

// A palavra Error
//  é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new , você cria uma cópia deste objeto, que será lançada como uma exceção no seu código.

//                                 try        e      catch

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos");
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};
console.log(sum(2, "3"));

//  Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try , que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber , que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw , que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message , uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente
