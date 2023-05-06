import React from "react";

import Entry from "./Entry";

function Register() {

  const name = "fsdfas";

  return (
    <Entry
      title="Регистрация"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы? Войти"
      linkPath="/sign-in"
    >
      <label className="entry__label">
        <input
          value={name}
          // onChange={handleNameChange}
          name="profile-name"
          type="text"
          placeholder="Имя"
          id="profile-name-input"
          className="input-field input-field_name_profile-name popup__input"
          minLength="2"
          maxLength="40"
          required />
        <span className="profile-name-input-error popup__error"></span>
      </label>
      <label className="popup__label">
        <input
          // value={description}
          // onChange={handleDescriptionChange}
          name="profile-about"
          type="text"
          placeholder="О себе"
          id="profile-about-input"
          className="input-field input-field_name_profile-about popup__input"
          minLength="2"
          maxLength="200"
          required />
        <span className="profile-about-input-error popup__error"></span>
      </label>
    </Entry>
  );
}

export default Register;
