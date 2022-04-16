// A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers 

// Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes

// Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos

// O expect recebe o valor a ser testado e retorna um objeto representando uma expectation . Sobre esse objeto pode-se chamar os matchers que Jest fornece. 

//                              matchers mais comuns.


//                                                                             toBe

// toBe , que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5. 

expect(5).toBe("5")

//                                                                        toEqual      


// Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes: 

test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

//                                                                                Valores booleanos 

//  EXemplo e conteudo aqui:  https://jestjs.io/docs/using-matchers#truthiness

// null , undefined e false são valores falsy . Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais.
 

//                                                                                         Numeros 

// https://jestjs.io/docs/using-matchers#numbers

//                                                                                       Strings  (toMatch)

// Para comparar string com expressões regulares, utilize o matcher toMatch . 


//                                                        toContains, toContainEqual    e   toHaveLength  (Arrays)

// https://jestjs.io/pt-BR/docs/expect#tocontainitem

// Você pode verificar se um array contém um item em particular utilizando toContain . Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual . toHaveLength permite facilmente verificar o tamanho de um array ou de uma string. 

//                                                                                toHaveProperty  

// É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos. 

 //                                                                                          toThrow 

// O matcher toThrow será usado para testar se uma função é capaz de lançar um erro quando executada. Por exemplo, se quisermos testar uma função verificaNumeros('string') passando uma string como parâmetro, o matcher toThrow irá testar o erro retornado pela função para verificar se o log de error está correto, por exemplo. Para testar se uma função está retornando um erro, é importante estar atento à sintaxe do .toThrow : 

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
}); 

//  Note que para testar se um erro é lançado, passamos para o expect uma função. Chamamos multiplyByTwo dentro da arrow function . Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido") . Observe que nos dois casos a função que queremos testar é chamada indiretamente por uma arrow function . Seguir essa sintaxe é importante para que o seu teste funcione corretamente. const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});


//                                                                                                      not 
  
// not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil: 

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});
