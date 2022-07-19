import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
    if (this.props.formType === "signup") { this.state = { username: '', password: '', email: '', account_fname: '', account_lname: '' }; } else { this.state = { email: '', password: '' };};

  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log("user",user)
    this.props.processForm(user).then( console.log("afterform", this))
      // () => setTimeout(function () { return <Redirect to={'/'} /> }.bind(this), 2000))
  }

demoUser(e){
  e.preventDefault();

  this.setState({email: "" , password:"" })

  let email = "Demo@user.com"
  let password = "12345678"
debugger
let index = 0; 

this.demo = setInterval(() => {
  this.setState({ email: index < password.length ? (this.state.email.concat(email[index])) : (email), password: index < password.length ? (this.state.password.concat(this.state.password[index])) : (password) })
  index++
  if (index > 15) { setTimeout(function () { this.props.processForm({ password: '12345678', email: 'Demo@user.com' }) }.bind(this), 100); clearInterval(this.demo)}

}, 100);  


}

  // demoUser(e) {
  //   e.preventDefault();

  //   this.setState({ email: "", password: "" })

  //   let email = "Demo@user.com"
  //   let password = "12345678"
  //   debugger
  //   for (let index = 0; index < 15; index++) {
  //     setTimeout(function () { this.setState({ email: index < password.length ? (this.state.email.concat(email[index])) : (email), password: index < password.length ? (this.state.password.concat(this.state.password[index])) : (password) }) }.bind(this), 500)
  //     index++
  //   }

  //   setTimeout(function () { this.props.processForm({ password: '12345678', email: 'Demo@user.com' }) }.bind(this), 4000)
  // }

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
                  <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input input" />
                </label>
              {/* sign up toggle display */}
              <div className={(this.props.formType === "signup") ? (`display-true`) : (`display-none`) } >
                <label> <span className='form-text email'>  Username: </span>
              <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input input" />
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

          <div className={(this.props.formType === "login") ? (`display-true`) : (`display-none`)} >
            <span>Or, Try A Demo User</span>
            <button onClick={this.demoUser} >Demo User Login</button>
            </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
