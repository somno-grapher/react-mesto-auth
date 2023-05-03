import React from 'react';

function ImagePopup({
  card,
  onClose }) {
  const stateClass = card.link ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_show-photo ${stateClass}`} >
      <figure className="popup__container popup__container_type_photo">
        <button
          type="button"
          className="close-button popup__close-button"
          onClick={onClose}
        >
        </button>
        <img
          className="full-photo"
          src={card.link}
          alt={card.name}
        />
        <figcaption className="popup__title popup__title_type_photo">
          {card.name}
        </figcaption>
      </figure>
    </div>
  );
}


export default ImagePopup;
