import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>NADA!!!</p>
      </header>
      <MainPage />
    </div>
  );
}

export default App;
