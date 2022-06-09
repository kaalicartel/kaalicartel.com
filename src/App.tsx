import React from 'react';
import logo from './kaali-cartel.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Kaali cartel</h1>
        <p className='description'>
          A metacartel <b>($KAALI)</b> aimed at generating 
          profits by manipulating other DAOs.</p>
        <a
          href="https://mirror.xyz/0x6B9B88c8ccf62F97F230F18674689be8d6E43f15/HKjy7awgvP0N3TzWdPmfkoinSEvuW0QqO8CWZQijnkI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        <a
          href="https://discord.com/invite/sQ4Sp2mahx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Discord
        </a>
      </header>
    </div>
  );
}

export default App;
