// Por último, mas não menos importante, vem o operador ternário , ou ternary operator , que permite criar expressões condicionais com dois outputs possíveis em apenas uma linha. 

// condicionais mais simples, que só tenham duas possibilidades de resposta ( x se verdadeiro , y se falso ), com uma sintaxe simplificada e legível: o operador ternário 

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// ou seja :                 x    ?      y    :    z 
// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa;

 
// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const  trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira