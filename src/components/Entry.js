import React from "react";
import { NavLink } from 'react-router-dom';

function Entry({
  // TODO is needed?
  name,
  title,
  buttonText,
  linkTitle = "",
  linkPath = "",
  // TODO to be input
  onSubmit,
  children
}) {
  return (
    <div className="entry">
      <h2 className="entry__title">{title}</h2>
      <form
        className="entry__form"
        name={`${name}-form`}
        noValidate
        onSubmit={onSubmit}
      >
        <button
          className="submit-button entry__submit-button"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      <NavLink
        className="entry__link"
        to={linkPath}
      >
        {linkTitle}
      </NavLink>
    </div>
  );
}

export default Entry;
