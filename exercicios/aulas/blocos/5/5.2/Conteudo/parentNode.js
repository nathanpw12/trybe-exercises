//  A propriedade parentNode acessa o elemento pai do elemento sobre o qual a propriedade é chamada.

document.querySelector(".propriedade").parentNode

// Mas ela não é a única forma de, a partir de um elemento, navegar para outros.

parentNode; // retorna o nó pai.
parentElement; // retorna o elemento pai.
childNodes; // retorna um NodeList com todos os nós filhos.
children; // retorna um HTMLCollection com todos os elementos filhos.
firstChild; // retorna o primeiro nó filho.
firstElementChild; // retorna o primeiro elemento filho.
lastChild; // retorna o último nó filho.
lastElementChild; // retorna o último elemento filho.
nextSibling; // retorna o próximo nó.
nextElementSibling; // retorna o próximo elemento.
previousSibling; // retorna o nó anterior.
previousElementSibling; // retorna o elemento anterior.

// É importante dizer que, à primeira vista, as propriedades nextSibling e nextElementSibling parecem fazer a mesma coisa, mas uma pega o próximo nó do DOM , enquanto a outra pega o próximo elemento, e nem sempre o próximo nó é um elemento.


