import React, { Component } from 'react';
import logo from './logo.svg';
import homer from './homer.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">Mentorship git flow task</h1>
        <img src={homer} alt='homer' />
      </div>
    );
  }
}

export default App;
