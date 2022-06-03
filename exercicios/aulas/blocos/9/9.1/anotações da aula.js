// Java is non-blocking: O java script não é blocante, ou seja, ele tem a capacidade de trabalhar de forma assíncrona sem bloquear outras ações sincronas

// Callbacks: uma função passada como parâmetro para outra função 
// as callbacks são muito importantes para a assíncronissidade

// O done é colocado no param do it no jest
// Há uma forma alternativa de test que corrige isto. Em vez de colocar o teste em uma função com um argumento vazio, use um único argumento chamado done. Jest aguardará até que a "callback" done é chamada antes de terminar o teste.
// é preciso evoca-lo no final da função
// Podemos usar o beforeEach() em um describe do jest para executar uma mesma função antes de cada teste ou o afterEach() para executa-la depois de cada teste, isso funciona separadamente para cada describe