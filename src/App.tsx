import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome';


function App(): JSX.Element {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Dr. Bart" />
        <Welcome name="Ada" />
        <Welcome name="Babbage" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
