import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const loginSignupLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      {/* &nbsp;or&nbsp; */}
      <p> or </p>
      <Link to="/signup">Sign up!</Link>
    </nav>  );
  const namedGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? namedGreeting() : loginSignupLinks();
};


export default Greeting;
