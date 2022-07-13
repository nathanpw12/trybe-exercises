import { render, screen } from '@testing-library/react';
import App from './App';

// acessar os elementos da tela
// interagir com os elementos (se for necessário)
// fazer os teste

test('renders learn react link', () => {

  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  //fazer os teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});
