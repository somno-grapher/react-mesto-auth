import React, { useState } from "react";

import Entry from './Entry';

function Login({
  handleLogin
}) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(
      formValue.password,
      formValue.email,
      setFormValue);
  }

  return (
    <Entry
      title="Вход"
      buttonText="Войти"
      onSubmit={handleSubmit}
    >
      <label className="input-label">
        <input
          value={formValue.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          id="login-email-input"
          className="input-field input-field_name_login-email entry__input"
          required />
        <span className="login-email-input-error entry__error"></span>
      </label>
      <label className="input-label">
        <input
          value={formValue.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Пароль"
          id="login-password-input"
          className="input-field input-field_name_login-password entry__input"
          required />
        <span className="login-password-input-error entry__error"></span>
      </label>
    </Entry>
  );
}

export default Login;
