import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { conversionThunk, currencyThunk } from '../redux/actions';
import { ReduxState, Dispatch, Form } from '../types';
import { DescriptionContainer, FormTag, ValueContainer } from './styles';

function WalletForm() {
  const { wallet: { expenses } } = useSelector((state: ReduxState) => state);
  const [formState, setFormState] = useState<any>({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(currencyThunk());
  }, []);

  const { wallet: { currencies } } = useSelector((state: ReduxState) => state);
  console.log(formState);

  return (
    <FormTag
      onSubmit={
      (e) => {
        e.preventDefault();
        dispatch(conversionThunk({ ...formState, id: expenses.length }));
        setFormState({ ...formState, value: '', description: '' });
      }
}
    >
      <DescriptionContainer>
        <div>
          <label htmlFor="description">Descrição: </label>
          <input
            type="text"
            data-testid="description-input"
            id="description"
            value={ formState.description }
            onChange={ (e) => setFormState((prevState: Form) => (
              { ...prevState, description: e.target.value }
            )) }
          />
        </div>
        <div>
          <label htmlFor="tag-input">Categoria: </label>
          <select
            name="tag-input"
            id="tag-input"
            data-testid="tag-input"
            value={ formState.tag }
            onChange={ (e) => setFormState((prevState: Form) => (
              { ...prevState, tag: e.target.value }
            )) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>
      </DescriptionContainer>
      <ValueContainer>
        <div>
          <label htmlFor="expense">Valor: </label>
          <input
            type="text"
            data-testid="value-input"
            id="expense"
            value={ formState.value }
            onChange={ (e) => setFormState((prevState: Form) => (
              { ...prevState, value: e.target.value })) }
          />
        </div>
        <div>
          <label htmlFor="currency">Moeda: </label>
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ formState.currency }
            onChange={ (e) => setFormState((prevState: Form) => (
              { ...prevState, currency: e.target.value }
            )) }
          >
            {currencies
              .map((curren) => (
                <option
                  key={ curren }
                >
                  {curren}
                </option>
              )) }
          </select>
        </div>
        <div>
          <label htmlFor="method-input">Método de Pagamento: </label>
          <select
            name="method-input"
            id="method-input"
            data-testid="method-input"
            value={ formState.method }
            onChange={ (e) => setFormState((prevState: Form) => (
              { ...prevState, method: e.target.value }
            )) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </div>
      </ValueContainer>
      <button>
        Adicionar despesa
      </button>
    </FormTag>
  );
}

export default WalletForm;
