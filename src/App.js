import React from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
  return (
    <div>
      <h1>Cach so 1</h1>
      <h3>Kieu ham binh thuong</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <One></One>
    </div>
  );
}

export default App;
