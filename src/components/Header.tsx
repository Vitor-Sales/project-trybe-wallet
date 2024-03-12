import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header() {
  const { user: { email } } = useSelector((state: ReduxState) => state);
  console.log(email);

  return (
    <div>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
