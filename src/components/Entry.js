import React from "react";
import { Link } from 'react-router-dom';

function Entry({
  name,
  title,
  buttonText,
  linkTitle = "",
  linkPath = "",
  onSubmit,
  children
}) {
  return (
    <div className="entry">
      <h2 className="entry__title">{title}</h2>
      <form
        className="entry__form"
        name={`${name}-form`}
        // TODO provide js validation
        // noValidate
        onSubmit={onSubmit}
      >
        {children}
        <button
          className="submit-button entry__submit-button"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      {/* TODO divide title and path */}
      <Link
        className="entry__link"
        to={linkPath}
      >
        {linkTitle}
      </Link>
    </div>
  );
}

export default Entry;
