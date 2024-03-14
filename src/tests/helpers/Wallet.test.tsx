import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';
import mockData from './mockData';

describe('Testes na página "Wallet"', () => {
  it('1- Ao renderizar a página ver se tem todos os elementos iniciais: campos de : Valor, Descrição, Moeda, Método de Pagamento e Categoria. Cada um com os respectivos valores inicias.', () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValue({
        json: async () => mockData,
      } as Response);

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'],
      initialState: {
        user: {
          email: 'teste@teste.com',
        },
        wallet: {
          currencies: [
            'USD',
            'CAD',
            'GBP',
            'ARS',
            'BTC',
            'LTC',
            'EUR',
            'JPY',
            'CHF',
            'AUD',
            'CNY',
            'ILS',
            'ETH',
            'XRP',
            'DOGE',
          ],
          expenses: [],
          editor: false,
          idToEdit: 0,
        },
      } });

    const valueInput = screen.getByLabelText('Valor:');
    const descriptionInput = screen.getByLabelText('Descrição:');
    const currencyInput = screen.getByLabelText('Moeda:');
    const methodInput = screen.getByLabelText('Método de Pagamento:');
    const tagInput = screen.getByLabelText('Categoria:');
    const addExpenseBtn = screen.getByRole('button', { name: /Adicionar despesa/i });

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(addExpenseBtn).toBeInTheDocument();

    expect(valueInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(currencyInput).toHaveValue('USD');
    expect(methodInput).toHaveValue('Dinheiro');
    expect(tagInput).toHaveValue('Alimentação');
  });
});
