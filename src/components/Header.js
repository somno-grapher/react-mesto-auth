import logoPath from '../images/logo/mesto-russia-logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img src={logoPath}
        alt="Логотип"
        className="logo header__logo" />
    </header>
  );
}

export default Header;