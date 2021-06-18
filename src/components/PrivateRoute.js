import React from "react";
import { Route, Redirect } from "react-router-dom";

//1. Build a PrivateRoute component that redirects if user is not logged in

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
export default PrivateRoute;
