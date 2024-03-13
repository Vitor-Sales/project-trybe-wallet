import { screen } from '@testing-library/dom';
import { renderWithRouter } from './renderWith';
import App from '../../App';

describe('1- Testes da página Home', () => {
  it('Ao renderizar a página Home, se existe um campo para o email, um para a senha e um botão com o texto "Entrar"', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByLabelText('Email: ');

    expect(emailInput).toBeInTheDocument();
  });
});
