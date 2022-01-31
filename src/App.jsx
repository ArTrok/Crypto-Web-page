import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>NADA!!!</p>
      </header>
    </div>
  );
}

export default App;