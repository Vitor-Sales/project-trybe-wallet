import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('Testes da página Home', () => {
  it('1- Ao renderizar a página Home, se existe um campo para o email, um para a senha e um botão com o texto "Entrar"', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Senha:');
    const submitBtn = screen.getByRole('button', { name: 'Entrar' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('2- Passar as informações nos campos de email e senha para habilitar o botão de "Entrar". Ao apertar no botão "Entrar" que a página seja redirecionado para a rota"/carteria" e que tenha o email salvo na store', async () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const emailText = 'sansao@teste.com';
    const passwordText = '123456';

    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Senha:');
    const submitBtn = screen.getByRole('button', { name: 'Entrar' });

    await userEvent.type(emailInput, emailText);
    await userEvent.type(passwordInput, passwordText);
    await userEvent.click(submitBtn);

    const valueInput = screen.getByLabelText('Valor:');

    expect(valueInput).toBeInTheDocument();
    expect(store.getState().user.email).toBe(emailText);

    // Outro teste possível é fazer um mock para ver quais as opções estão disponíveis dentro do dropdown dda Moeda
  });
});
