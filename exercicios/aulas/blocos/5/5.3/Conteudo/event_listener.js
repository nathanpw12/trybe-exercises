// Uma das funcionalidades mais poderosas do JavaScript é a capacidade de "reagir" a eventos que acontecem em uma página web. Praticamente qualquer interação de quem usa com a página pode ser considerada um evento. O rolar da tela , o passar do mouse por um elemento, o click do mouse , o digitar do teclado , entre outros.

onload   // São exemplos de 
onclick        //  eventos

// 1- DOM on-event handlers: Eventos que são disparados pelo própio DOM, como o carregamento da página

window.onload = jsCarregado

function jsCarregado () {
   alert('A página foi carregada'); 
}

// 2- Inline event handlers: Eventos que são disparados pelo usário e fica inline no código

// exemplo em html: 
<button onclick="maisInfos();">Mais informações</button>
<p id="trybe-continua"></p>

function maisInfos() {
  const textoMaisInfo = document.getElementById('trybe-continua');
  textoMaisInfo.innerText = "Ao clicar no botão, o evento onclick vai disparar a função maisInfos e adicionar esse texto ao p"
}

// 3- Event Listener:  ele fica esperando que um evento específico ocorra e, quando isso acontecer, executar uma função pré-determinada pelo programador:

// A- declara um constante que referencia o elemento que voce deseja do html
const clickP = document.getElementById("clicar");

// B- adiciona o escutador a este elemento
clickP.addEventListener('click', recebeClick)

// C- declara a função que será executada

function recebeClick(eventoDeOrigem) {  // o evento de origem é o objeto recebido na funçao quando o evento acontecer com todas as informações sobre esse objeto
  console.log(eventoDeOrigem.target); // o target retorna o própio elemento, no caso clickP
  console.log(eventoDeOrigem.type);   // O type retorna o tipo de evento, no caso click 
}
  

// addEventListener: Parametros:

// 1- O evento que estamos esperando escutar: Exemplos: click , change , mouseover etc;
// 2- A função (criada por você) que será executada quando o evento acontecer.


// 
