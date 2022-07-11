import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => ( 
    !loggedIn ? (<><Component {...props} /></>) : (<><Redirect to="/" /></> )  )} />
);
// auth is if you are logged in you can't access it

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/login" />  )  )} />
);
// protected is you can't access it unless you are logged in

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
  // this is different than the application controller logged_in? function
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
