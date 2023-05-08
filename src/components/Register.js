import React, { useState } from "react";

import Entry from './Entry';

function Register({
  handleRegister
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
    handleRegister(
      formValue.password,
      formValue.email,
      setFormValue);
  }

  return (
    <Entry
      title="Регистрация"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы? Войти"
      linkPath="/sign-in"
      onSubmit={handleSubmit}
    >
      <label className="input-label">
        <input
          value={formValue.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          id="register-email-input"
          className="input-field input-field_name_register-email entry__input"
          required />
        <span className="register-email-input-error entry__error"></span>
      </label>
      <label className="input-label">
        <input
          value={formValue.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Пароль"
          id="register-password-input"
          className="input-field input-field_name_register-password entry__input"
          required />
        <span className="register-password-input-error entry__error"></span>
      </label>
    </Entry>
  );

}

export default Register;
