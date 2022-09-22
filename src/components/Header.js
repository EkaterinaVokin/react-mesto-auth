import logoPath from '../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Header(props) {
  const { actions } = props;

  const [isOpened, setIsOpened] = useState(false);

  // обработчик открыть бургер меню
  function toggleIsOpened() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <header className="header page__header">
        <div className="header__container">
          <div className="header__controls">
            <NavLink className="header__link" to="/">
              <img className="header__logo" src={logoPath} alt="Логотип" />
            </NavLink>

            <div
              className={`header__burger-menu ${isOpened ? 'header__burger-menu_opened' : ''}`}
              onClick={toggleIsOpened}
            >
              <div className="header__burger-bar"></div>
              <div className="header__burger-bar"></div>
              <div className="header__burger-bar"></div>
            </div>
          </div>

          <div className={`header__menu ${isOpened ? 'header__menu_mobile-opened' : ''}`}>
            <div className="header__data">
              {actions}
              </div>
          </div>
        </div>
      </header>
    </>
  );
}
