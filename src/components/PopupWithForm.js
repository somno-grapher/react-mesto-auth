import React from 'react';

function PopupWithForm({
  buttonText, // has default value
  isOpen,
  name,
  onClose,
  onSubmit,
  title,
  children
}) {
  const stateClass = isOpen ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_${name} ${stateClass}`}>
      <div className="popup__container popup__container_type_edit-window">
        <button
          type="button"
          className="close-button popup__close-button"
          onClick={onClose}>
        </button>
        <h2 className="popup__title popup__title_type_edit-window">{title}</h2>
        <form
          name={`${name}-form`}
          className="popup__form"
          // TODO provide js validation
          // noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className="submit-button popup__submit-button"
          >
            {buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
