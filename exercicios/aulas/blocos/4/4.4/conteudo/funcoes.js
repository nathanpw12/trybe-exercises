// Funções são ,  Segundo o MDN, é um conjunto de instruções que executa uma tarefa ou calcula um valor. Funções são a forma mais essencial de organização de código e de lógica na programação; usando-as você consegue dividir seu código em blocos lógicos e deixar as coisas mais organizadas.

//Base da  função:

function nomeDaFuncao (parametro1, parametro2) {
    // intruções do que a funçao vai fazer

    return; // as funções podem retornar algo das instruções
}

// Como invocar uma função:

nomeDaFuncao(parametro1, parametro2)

// Exemplo de uso de funções, podemos subistuir uma variavel assim , por uma funçao:

let nome = 'João';

console.log('Bom dia, ' + nome);


// assim:

function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Exemplo de uso de funções com if:

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado