// Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice.
// O for/in irá percorrer a propriedade declarada, e não o seu valor em si:

let computador = ['redragon', 'kumara', 'kobra', 'LG']

for (key in computador) {
  console.log(key);
}

// Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in:

let computadorDois = ["teclado", "monitor", "cadeira"];

for (value of computadorDois) {
  console.log(value);
}
