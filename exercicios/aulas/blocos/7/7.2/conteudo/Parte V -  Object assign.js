// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é: 

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// exemplo: 

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  //  quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, a propriedade do objeto destino sempre utilizará o último valor disponível. 


  // A const clone abaixo é exatamente igual ao objeto person , e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o 'objeto retornado pelo método Object.assign é o próprio objeto destino', que foi 'alterado adicionando as novas propriedades'.

  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// Para criar um clone de um objeto e que objeto original nao seja mudado ao alterar o clone 


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName); // usar object.assing({},parametro, parametro) -> agora o destino eh o objeto newPeson = {}
 
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

