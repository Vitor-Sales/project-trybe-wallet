import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import { HeaderTag } from './styles';
import logo from '../public/logo.svg';
import profileImg from '../public/profile.svg';
import coinImg from '../public/coin.svg';

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
    <HeaderTag>
      <h1><img src={ logo } alt="" /></h1>
      <div>
        <img src={ coinImg } alt="" />
        <p data-testid="header-currency-field">
          <span>Total de despesas:</span>
          {' '}
        </p>
        <p data-testid="total-field">{`${totalExpense.toFixed(2)} BRL`}</p>
      </div>
      <div>
        <img src={ profileImg } alt="" />
        <p data-testid="email-field">{email}</p>
      </div>
    </HeaderTag>
  );
}

export default Header;
