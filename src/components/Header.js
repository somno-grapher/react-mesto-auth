import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import logoPath from '../images/logo/mesto-russia-logo.svg';

function Header({
  email,
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
      <div className="header__pivot">
        <Routes>
          <Route
            path="/sign-in"
            element={
              <NavLink
                className="header__entry-link"
                to="/sign-up"
              >
                Регистрация
              </NavLink>}
          />
          <Route
            path="/sign-up"
            element={
              <NavLink
                className="header__entry-link"
                to="/sign-in"
              >
                Войти
              </NavLink>}
          />
        </Routes>
      </div>
      <div className="header__details">
        <Routes>
          <Route
            path="/"
            element={
              <p
                className="header__email"
              >
                {`${email}fasdfds`}
              </p>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
