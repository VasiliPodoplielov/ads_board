import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Auth-style.css';
import {logIn} from '../../redux/actions/authActions';

const Auth = () => {
  const dispatch = useDispatch();
  const loginFailed = useSelector(state => state.authReducer.loginFailed);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  function onFormSubmit(e) {
    e.preventDefault();
    setIsLoginValid(true);
    setPasswordValid(true);

    let userInfo = {
      login,
      password
    };

    if (!userInfo.login) {
      setIsLoginValid(false);
      return;
    }

    if (!userInfo.password) {
      setPasswordValid(false);
      return;
    }

    setPasswordValid(true);

    dispatch(logIn(userInfo));
  }

  return (
    <div className="auth">
      <div className="container">
        <p className="auth__block-title">Введите логин и пароль для авторизации или регистрации в системе</p>
        <form className='auth-form'>
          <div className="form-group">
            <label htmlFor="user__login">Имя пользователя</label>
            <input
              type="text"
              id="user__login"
              className={`form-control border ${isLoginValid ? '' : 'border-danger'}`}
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user__password">Пароль</label>
            <input
              type="password"
              id="user__password"
              className={`form-control border ${isPasswordValid && !loginFailed ? '' : 'border-danger'}`}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {
            loginFailed
            ? <span className="login__failed text-danger">При вводе пароля допущена ошибка</span>
              : null
          }

          <button type="submit"
                  className="btn btn-primary auth__form-submit"
                  onClick={(e) => onFormSubmit(e)}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
