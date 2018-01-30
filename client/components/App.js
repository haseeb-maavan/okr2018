import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <LoginPage />
      </div>
    );
  }
}

export default App;
