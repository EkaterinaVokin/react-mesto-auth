import logoPath from '../images/logo.svg';

export function Header() {
  return (
    <header className="header page__header">
      <a className="header__link" href="#">
        <img className="header__logo" src={logoPath} alt="Логотип" />
      </a>
    </header>
  )
}