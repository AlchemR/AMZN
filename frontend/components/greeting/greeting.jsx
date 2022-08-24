import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  // console.log("greeting cont props", this)
  const loginSignupLinks = () => (
    <nav className="login-signup">
      <Redirect to="/login">Login</Redirect>
    </nav>  );
  const namedGreeting = () => (
    <hgroup className="header-group-1 grow-main">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? namedGreeting() : loginSignupLinks();
};


export default Greeting;
