// react import
import React from 'react';
import { useEffect, useState } from "react";

// project import
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace
}) {

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  }

  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  },
    [isOpen]);


  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
    >
      <label className="input-label">
        <input
          value={name}
          onChange={handleNameChange}
          name="card-title"
          type="text"
          placeholder="Название"
          id="card-title-input"
          className="input-field input-field_name_card-title popup__input"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="card-title-input-error popup__error"></span>
      </label>
      <label className="input-label">
        <input
          value={link}
          onChange={handleLinkChange}
          name="card-photo-link"
          type="url"
          placeholder="Ссылка"
          id="card-link-input"
          className="input-field input-field_name_card-photo-link popup__input"
          required
        />
        <span className="card-link-input-error popup__error"></span>
      </label>
    </PopupWithForm>
  );

}

export default AddPlacePopup;
