import React from "react";

import Entry from "./Entry";

function Register() {

  return (
    <Entry
      title="Регистрация"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы? Войти"
      linkPath="/sign-in"
    >
      <label className="input-label">
        <input
          // value={name}
          // onChange={handleNameChange}
          name="register-email"
          type="email"
          placeholder="Email"
          id="register-email-input"
          className="input-field input-field_name_register-email entry__input"
          required />
        <span className="register-email-input-error entry__error"></span>
      </label>
      <label className="input-label">
        <input
          // value={description}
          // onChange={handleDescriptionChange}
          name="register-password"
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
