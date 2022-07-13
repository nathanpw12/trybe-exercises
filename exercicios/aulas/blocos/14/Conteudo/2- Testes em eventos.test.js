// Para testar comportamentos feitos pela pesso usuária interagindo com a aplicação, precisaremos do  userEvent

// No react app o user event ja vem instalado por padrao , mas para instala-lo caso nescessario , utiliza-se a o comando  npm install --save-dev @testing-library/user-event 

// /////////////////////////////////////   userEvent   ///////////////////////////////////////////////////////

// A maioria dos métodos do userEvent são síncronos, exceto quando utilizar o userEvent.type, pois ele aguarda a informação que será testada.

// type (  type(element, text, [options])  )

// esse terceiro parâmetro pode ser utilizado para passar um delay, em milissegundos, que será o tempo esperado entre dois caracteres digitados para realizar a ação do teste. Você pode utilizar essa opção caso queira testar o comportamento de uma pessoa usuária com maior ou menor agilidade de digitação, o valor default para o delay é 0. O userEvent.type é um evento que retorna uma Promise, porém, como valor default é 0, você só precisará aguardar o retorno dessa Promise caso passe algum valor para a option delay, do contrário o userEvent.type funcionará de modo síncrono.

userEvent.type
userEvent.click
