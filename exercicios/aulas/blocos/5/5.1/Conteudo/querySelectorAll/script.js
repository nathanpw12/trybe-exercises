// o query selector all encontra todos os elemento dado a regra aplicado a ele e retorna em uma node list:

//o node list é diferente da html colection

document.querySelectorAll(".class"); // retorna uma node list com todos os elementos da class "class"

document.querySelectorAll(".class")[0].innerHTML = "lembrar de especificar a posição do elemento na node list antes de muda-lo"

// Tanto o querySelector quanto o querySelectorAll acessam CSS Selectors de todos os tipos. Ou seja, eles podem acessar muito além de valores de ids e classes