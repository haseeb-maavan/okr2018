import React, { Component } from 'react';
import '../css/App.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="page-content">
          <div className="login-container">

            <div className="text-center">
                <img src={require('../images/logo.png')} className="img-cust-responsive"/>
            </div>
            <div className="login-contents">
                <h1>Login</h1>
                <input className="login-txtbx" type="text" placeholder="Username" /><br/><br/>
                <input className="login-txtbx" type="text" placeholder="Password" />
                <div><a href="#" className="login-btn">Log In</a></div>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
