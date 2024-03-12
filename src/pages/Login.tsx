import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validPassword, setValidPassword] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailValue(email);
    setValidEmail(!emailRegex.test(email));
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>TrybeWallet</h1>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          navigate('/carteira');
        } }
      >
        <input
          type="email"
          data-testid="email-input"
          value={ emailValue }
          onChange={ (e) => handleEmail(e.target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          minLength={ 6 }
          value={ validPassword }
          onChange={ (e) => setValidPassword(e.target.value) }
        />
        <button
          type="submit"
          disabled={ validPassword.length < 6 || validEmail }
          onClick={ () => {
            dispatch(sendEmail(emailValue));
          } }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
