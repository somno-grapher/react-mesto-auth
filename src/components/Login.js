import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import Entry from './Entry';
import * as auth from '../utils/auth';

function Login({
  handleLogin
}) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  // const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.authorize(formValue.password, formValue.email)
      // .then((res) => console.log(res));
      .then((jsonResponse) => {
        if (jsonResponse.token) {
          setFormValue({ email: '', password: '' });
          handleLogin();
          // navigate('/', { replace: true });
        }
      })
      // .catch((err) => {
      //   console.log(err);
      // })
      ;
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
