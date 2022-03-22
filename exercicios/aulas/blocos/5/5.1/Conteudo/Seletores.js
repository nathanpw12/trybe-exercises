// Lembrete: Quando colocar-se um script na pagina, deve se considerar a posição da tag script no documento pois voce pode presisar que o script use elementos das pagina carregados.


document.getElementById 
// exemplo de uso:  
document.getElementById("id"); // (retorna a tag inteira do id)
document.getElementById("id").innerHTML; // (retorna o conteudo/texto da tag)
document.getElementById("id").innerText; // (retorna somente o texto, ignora tags dentro do elemento)
document.getElementById("id").style; // (retorna todos os estilos do elemento)
document.getElementById("id").innerHTML = "conteudo do elemento será alterado";



