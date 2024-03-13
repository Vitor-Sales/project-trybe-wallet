import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  user: {
    email: string,
  },
  wallet: {
    currencies: string[],
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica se uma despesa está sendo editada
    idToEdit: number, // valor numérico que armazena o id da despesa que está sendo editada
  }
};

export type Form = {
  formState: {
    id: number,
    value: string,
    description: string,
    currency: string,
    method: string,
    tag: string,
  }
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
