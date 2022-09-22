import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from './Profile';
import { InfoTooltip } from './InfoTooltip.js';
import { register,authorize,getContent }  from '../utils/duckAuth.js';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
  }); // пер.состояния текущего пользователя

  const [token, setToken] = useState(localStorage.getItem('token')); // пер.состояния токена
  const [stateIsLogin, setStateIsLogin] = useState({isLoggedIn: false, email: ''});
  const [hasInfoTooltip, setHasInfoTooltip] = useState(false); // пер.состояния видимости тултипа
  const [isError, setIsError] = useState(false); // пер.состония ошибки тултипа

  const history = useHistory();

  // функция принимает данные пользователя которые он ввел и отправляет на сервер (регестрирует)
  function handleSubmitRegister(dataUser) {
    return register(dataUser.email,dataUser.password)
      .then((data) =>{ // получаем данные сервера id и email
        setHasInfoTooltip(true); // открывается тултип
        setIsError(false); // показывает что успешно зарегестрированы
        history.push('/sign-in') // отправляем пользователя на страницу входа
      })
      .catch((err) =>{
        setHasInfoTooltip(true); // открывает тултип
        setIsError(true); // показывает что произошла ошибка данные не ушли на сервер
      });
  }

  function handleSubmitLogin(dataUser) {
    return authorize(dataUser.email, dataUser.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token); // сохраняем токен в хранилище
          setToken(data.token);
        }
      })
      .catch((err) => {
        setHasInfoTooltip(true); // открывает тултип
      });
  }

  useEffect(() => {
    tokenCheck(token);
  }, [token]);

  function tokenCheck(token) {
    if (!token) {
      return; // если нет токена в хранилище выходим из функции
    }
    return getContent(token) // отправляем токен на сервер
      .then((res) => {
        if (res) {
          setStateIsLogin({
            isLoggedIn: true,
            email: res.data.email,
          });
          history.push('/');
        }
      });
  }

  function closeInfoTooltip() {
    setHasInfoTooltip(false);
  }
  
  function handleLogout(){
    localStorage.removeItem('token')
    history.push('sign-in')
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Switch>
        <Route path="/sign-up">
          <Register onSubmit={handleSubmitRegister} />
        </Route>
        <Route path="/sign-in">
          <Login onSubmit={handleSubmitLogin}/>
        </Route>
        <ProtectedRoute path="/" isLoggedIn={stateIsLogin.isLoggedIn}>
          <Profile email={stateIsLogin.email} onLogout={handleLogout}/>
        </ProtectedRoute>
      </Switch>
      <InfoTooltip 
        isOpen={hasInfoTooltip} 
        error={isError} 
        onClose={closeInfoTooltip} 
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
