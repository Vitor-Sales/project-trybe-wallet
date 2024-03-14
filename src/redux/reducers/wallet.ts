// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { DELETE_EXPENSE, SUCCESS_CONVERSION_REQUEST, SUCCESS_REQUEST } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SUCCESS_REQUEST:
      return {
        ...state,
        currencies: action.payload,
      };
    case SUCCESS_CONVERSION_REQUEST:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((exp: any) => exp.id !== action.payload),
      };
    default: return state;
  }
};

export default wallet;
