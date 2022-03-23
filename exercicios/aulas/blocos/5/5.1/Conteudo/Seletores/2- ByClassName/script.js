// Ao usar um get elements by class name, é dado uma lista com todos os elementos com aquela class, assim cada um tem um index começando do zero que é importante lembra-lo para alterar algo neles.

// Para alterar um elemento

document.getElementsByClassName("class")[0].innerHTML =
  "Mudando o texto da posição 0";

// Trocar varios elementos de uma vez
// esse for vai percorrer todos os indices dados pela lista formada no get elements by class name e alteralos pelo texto escolhido.
let Class = document.getElementsByClassName("Class");

for (let i = 0; Class.length; i += 1) {
  Class[i].innerHTML = "esse texto ira ser colocado em todos os elementos";
}
