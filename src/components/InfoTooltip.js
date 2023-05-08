import React from 'react';

function InfoTooltip({
  infoTooltipData,
  isOpen,
  onClose
}) {
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
          src={infoTooltipData.iconSrc}
          alt="Логотип"
        />
        <p className="popup__message">{infoTooltipData.message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
