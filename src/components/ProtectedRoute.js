import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ element: Component, ...props }) {
  return (
    props.isLoggedIn
      ? <Component {...props} />
      // TODO sign-in
      : <Navigate to="/sign-up" replace />
  );
}

export default ProtectedRouteElement;
