import React from 'react';

import logoPath from '../images/logo/mesto-russia-logo.svg';

function Header({
  onSignOut
}) {

  return (
    <header className="header page__header">
      <img
        className="logo header__logo"
        src={logoPath}
        alt="Логотип"
        onClick={onSignOut}
      />
    </header>
  );
}

export default Header;
