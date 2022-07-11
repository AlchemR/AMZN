import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    if (this.props.formType === "signup") { this.state = { username: '', password: '', email: '', account_fname: '', account_lname: '', signupshow: true }; } else { this.state = { email: '', password: '', signupshow: false };};

  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

handleContinue(e){
  e.preventDefault();
  let hideclass = document.getElementsByClassName("dummy")
  hideclass.setClass
}

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }




  render() {
    return (
      <div className="login-form-container">
        <div className='login-form-wrapper'>
        <div className='login-logo'> logo goes here </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to AMZN!
              <br />
              Please {this.props.formType} or {this.props.navLink}
              {this.renderErrors()}
              <div className="login-form">
                <br />
              <label > <span className='form-text username'> Email: </span>
                  <input type="text" value={this.state.username} onChange={this.update('email')} className="login-input input" />
                </label>
              {/* sign up toggle display */}
              <div className={ (this.state.signupshow) ? (`display-true`) : (`display-none`) } >
                <label> <span className='form-text email'>  Username: </span>
              <input type="text" value={this.state.email} onChange={this.update('username')} className="login-input input" />
                </label>
                <label> <span className='form-text first-name'> First Name: </span>
              <input type="text" value={this.state.account_fname} onChange={this.update('account_fname')} className="login-input input" />
                </label>
                <label> <span className='form-text last-name' > Last Name: </span>
                <input type="text" value={this.state.account_lname} onChange={this.update('account_lname')} className="login-input input" />
                </label>
                </div>
                
              <label><span className='form-text password'> Password: </span>
                  <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input input" />
                </label>
                <br />
                <input className="session-submit input" type="submit" value={this.props.formType} />
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
