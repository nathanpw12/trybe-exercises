// As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las. 

//                               Estruturando uma HOF
 
//  as HOF nos permitem compactar ações e não somente repassar valores. Veja este exemplo:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// Exemplo de HOF da aula:  https://prnt.sc/6F01NmAokf6D


// Fixacão

// 1 - Crie uma função que retorne a string 'Acordando!!' ;

const acordando = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;

const cafe = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;

const dormir = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (toDo) => {
  toDo(console.log(toDo()))
}

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);