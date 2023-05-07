import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Entry from './Entry';
import * as auth from '../utils/auth';

function Register({
  setInfoTooltipState
}) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(formValue.password, formValue.email)
      // .then((res) => console.log(res));
      .then(() => {
        setFormValue({ email: '', password: '' });
        setInfoTooltipState(true);
        navigate('/sign-in', { replace: true })
      })
      .catch((err) => {
        setInfoTooltipState(true);
        console.log(err);
      });
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
