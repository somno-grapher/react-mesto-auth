import React from 'react';

import logoPath from '../images/icons/ok.svg';

function InfoTooltip({
  iconSrc,
  message,
  isOpen,
  onClose
}) {
  // const iconPath = require(iconSrc);
  // isOpen = true;
  const stateClass = isOpen ? 'popup_opened' : '';
  return (
    <div className={`popup ${stateClass}`}>
      <div className="popup__container popup__container_type_info-tooltip">
        <button
          type="button"
          className="close-button popup__close-button"
          onClick={onClose}
        >
        </button>
        <img
          className="info-icon"
          src={logoPath}
          alt="Логотип"
        />
        <p className="popup__message">'fsafa'</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
