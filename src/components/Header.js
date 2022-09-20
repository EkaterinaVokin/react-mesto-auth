import logoPath from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

export function Header(props) {
  
  const {actions} = props;

  return (
    <header className="header page__header">
      <div className="header__container">
        <NavLink className="header__link" to="/">
          <img className="header__logo" src={logoPath} alt="Логотип" />
        </NavLink>
        <div className="header__menu">
           {actions}
        </div>
      </div>
    </header>
  );
}
