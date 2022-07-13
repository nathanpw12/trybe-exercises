// No conteúdo de testes já visto no curso, funções eram testadas. Já no RTL o objetivo é testar comportamento, como se algo aparece ou não na tela. 

// Passo para fazer os teste:


/////////////////////////////    1 - Renderização    ///////////////////////////////////////////////////

// Para se testar o comportamento de um componente, precisamos renderizar o componente em algum lugar
// e para isso temos a função render();

test('teste de exemplo', () => {
  // a função render()
  render(<App />);                     // "/texto/i" serve para ignorar case sensetive           
  const linkElement = screen.getByText(/learn react/i); // para usar esse seletor devemos utilizar a função screen
  expect(linkElement).toBeInTheDocument();
});

////////////////////////////////////    2 - Seletores    ///////////////////////////////////////////////////

getByText

getByLabelText // ele pegará o input de acordo com o texto da label que está associado a ele

getByRole // Ele busca pelo atributo role. No caso de um botão, o role é definido pela propriedade type="button". 
// O role serve, por exemplo, para buscar por um elemento <button>Enviar<button/> ou <input type="button" value="Enviar" />.

getAllByRole // que armazenará todos os valores encontrados pelo seletor em um array, expect(buttons).toHaveLength(2)

getByTestId //  Para usar esse seletor devemos adicionar uma propriedade ao elemento data-testid , exemplo data-testid="id-send"

toBeInTheDocument

toHaveProperty

toHaveValue
