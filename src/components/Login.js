import React, { Component } from 'react';


export default class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <section className="sign-in-info">

        <h1 className="SignIn-Text">Existing User Sign In</h1>

        <input type="text" className="registration" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />

        <input type="password" className="registration" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />

        <button className='btn btn-success btn-lg' type='submit'>Log in</button>

        </section>
        <section className="register-info">
        <h1 className="register-text">Register a New Account</h1>

        <input type="text" className="registration" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />

        <input type="password" className="registration" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />

        <button className='btn btn-success btn-lg' type='submit'>Register</button>
        </section>
      </div>

      
    );
  }
}