import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CollabBoard</h1>
        <p>Your team's collaborative task workspace.</p>
      </header>
      
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;

