// Esse reducer será responsável por tratar as informações da pessoa usuária

import { AnyAction } from 'redux';
import { SEND_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default: return state;
  }
};

export default user;
