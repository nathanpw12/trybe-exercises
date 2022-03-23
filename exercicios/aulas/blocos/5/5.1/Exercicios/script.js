// 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

document.querySelectorAll(".center-content p")[0].innerHTML =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aliquam odit ipsa consequuntur animi voluptas sed est a eaque inventore eveniet architecto asperiores iure natus temporibus, deleniti veniam, autem corporis.";

// 2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109))

document.querySelector(".main-content ").style.backgroundColor =
  "rgb(76,164,109)";

// 3-  Crie uma função que mude a cor do quadrado vermelho para branco.

document.querySelector(".center-content").style.backgroundColor = "white";

// 4-  Crie uma função que corrija o texto da tag <h1>.

document.querySelector(".title").innerHTML = "Exercício 5.1 - Java Script";

// 5- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

document.querySelectorAll(".center-content p")[0].style.textTransform = "uppercase";

// Crie uma função que exiba o conteúdo de todas as tags <p> no console

console.log(document.querySelectorAll("p"))