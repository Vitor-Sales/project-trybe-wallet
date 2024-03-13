import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header() {
  const { user: { email } } = useSelector((state: ReduxState) => state);
  const { wallet: { expenses } } = useSelector((state: ReduxState) => state);
  console.log(email);
  console.log(expenses);
  // let sumExpense = 0;
  // for (let i = 0; i < expenses.length; i += 1) {
  //   sumExpense += Number(expenses[i].value);
  // }
  let totalExpense = 0;
  expenses.forEach((expense: any) => {
    const conversionCurrency = expense.currency;
    totalExpense += (Number(expense.value)
     * Number(expense.exchangeRates[conversionCurrency].ask));
  });

  return (
    <div>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{totalExpense.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
