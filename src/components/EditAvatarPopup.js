// react import
import React from 'react';
import { useEffect, useRef } from "react";

// project import
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar
}) {

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  useEffect(() => {
    inputRef.current.value = '';
  },
    [isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="update-avatar"
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
    >
      <label className="input-label">
        <input
          ref={inputRef}
          name="avatar-link"
          type="url"
          placeholder="Ссылка"
          id="avatar-link-input"
          className="input-field input-field_name_avatar-link popup__input"
          required
        />
        <span className="avatar-link-input-error popup__error"></span>
      </label>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;
