// react import
import React from 'react';
import { useContext, useEffect, useState } from "react";

// project import
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser
}) {

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  const currentUser = useContext(CurrentUserContext);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  },
    [currentUser,
      isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
    >
      <label className="input-label">
        <input
          value={name}
          onChange={handleNameChange}
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
      <label className="input-label">
        <input
          value={description}
          onChange={handleDescriptionChange}
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
    </PopupWithForm>
  );

}

export default EditProfilePopup;
