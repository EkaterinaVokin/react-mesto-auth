import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function ProtectedRoute({ component: Component, ...props }) {


  return (
    <Route exact={props.exact}>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  )
}