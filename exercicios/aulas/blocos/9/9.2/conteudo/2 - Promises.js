// O foco neste bloco é o consumo de APIs utilizando o fetch e por esse motivo vamos explicar de forma básica o conceito de Promise, já que o retorno de um fetch é uma Promise.O foco neste bloco é o consumo de APIs utilizando o fetch e por esse motivo vamos explicar de forma básica o conceito de Promise, já que o retorno de um fetch é uma Promise.

// 1 - As Promises são assíncronas, ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções;

// 2 - As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono;

// 3 - As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um Construtor.

// Outro ponto importante é que as Promises possuem 3 estados:

// 1 - Pending (pendente): estado inicial, significa que ela está em execução;

// 2 - Fulfilled (resolvida): estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso;

// 3 - Rejected (rejeitada): estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição.

// Então quando você se deparar com um Promise { <[estado]> } em um console.log() pode significar que você tentou acessar o valor de uma Promise antes dela ter finalizado sua execução.

// E o que você precisa saber sobre Promise para usar o fetch?
// Quando utilizamos o fetch recebemos uma Promise, o que significa que temos uma "promessa" de que aquilo vai retornar algo para você. No caso do fetch temos dois possíveis retornos: em caso de sucesso, recebemos a response (que também é uma Promise e contém o dado final que queremos acessar), e caso algo dê errado com a nossa requisição, recebemos as informações sobre o erro. Mas toda promessa é assíncrona e para termos o retorno dela devemos esperar um tempo até essa promessa ser resolvida, então como fazemos isso?
// Para resolver esse problema temos duas opções, .then() .catch() e async/await com try/catch. Esses métodos vão garantir que o código que estamos desenvolvendo aguarde o retorno de uma Promise antes de executar os próximos passos. Veremos esses métodos com mais detalhes junto com o conteúdo de fetch.