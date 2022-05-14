// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const criaEmail = (nomeCompleto) => {
  return `${nomeCompleto.replace(" ", "_")}@trybe.com`;
};

function retornaObjPessoa(nomeCompleto) {
  return {
    nomeCompleto,
    email: criaEmail(nomeCompleto),
  };
}

const newEmployees = () => {
  const employees = {
    id1: retornaObjPessoa("Pedro Guerra"),
    id2: retornaObjPessoa("Luiza Drumond"),
    id3: retornaObjPessoa("Carla Paiva"),
  };
  return employees;
};

console.log(newEmployees());

