// 1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

document.getElementById("page-title").innerHTML = "Meu filme favorito";
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";
const subtitle = document.getElementById("subtitle");
subtitle.style.color = "green";
subtitle.innerText = "Subtitulo verde"
const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.style.color = "blue";
secondParagraph.innerText = "Segundo paragrafo azul"