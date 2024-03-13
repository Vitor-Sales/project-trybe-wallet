// Coloque aqui suas actions
import { Dispatch, Form } from '../../types';

export const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (email: string) => ({
  type: SEND_EMAIL,
  payload: email,
});

// export const SEND_EXPENSE = 'SEND_EXPENSE';

// export const sendExpense = (form: Form) => ({
//   type: SEND_EXPENSE,
//   payload: form,
// });

export const START_REQUEST = 'START_REQUEST';
export const startRequest = {
  type: START_REQUEST,
};

export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const successRequest = (payload: any) => ({
  type: SUCCESS_REQUEST,
  payload,
});

export const SUCCESS_CONVERSION_REQUEST = 'SUCCESS_CONVERSION_REQUEST';
export const successConversionRequest = (payload: any) => ({
  type: SUCCESS_CONVERSION_REQUEST,
  payload,
});

export const FAIL_REQUEST = 'FAIL_REQUEST';
export const failRequest = (error: any) => ({
  type: FAIL_REQUEST,
  error,
});

export const currencyThunk = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startRequest);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const dataKeys = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(successRequest(dataKeys));
    } catch (error) {
      dispatch(failRequest(error));
    }
  };
};

export const conversionThunk = (formState: Form) => {
  return async (dispatch: Dispatch) => {
    dispatch(startRequest);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const newFormState = { ...formState, exchangeRates: data };
      dispatch(successConversionRequest(newFormState));
    } catch (error) {
      dispatch(failRequest(error));
    }
  };
};

// export const conversionThunk = (currency: string, formState: Form) => {
//   return async (dispatch: Dispatch) => {
//     const { wallet: { expenses } } = useSelector((state: ReduxState) => state);
//     dispatch(startRequest);
//     try {
//       const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//       const data = await response.json();
//       const conversionrate = data[currency];
//       const newFormState = {
//         ...formState, currencyInfo: conversionrate, id: expenses.length,
//       };
//       dispatch(successConversionRequest(newFormState));
//     } catch (error) {
//       dispatch(failRequest(error));
//     }
//   };
// };
