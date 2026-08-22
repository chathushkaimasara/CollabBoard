import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CollabBoard</h1>
        <p>Your team's collaborative task workspace.</p>
      </header>
      
      <main className="board-skeleton">
        {/* Board and Task components */}
        <div className="column-placeholder">
          <h2>To Do</h2>
          <p>Task cards will go here...</p>
        </div>
        <div className="column-placeholder">
          <h2>Doing</h2>
        </div>
        <div className="column-placeholder">
          <h2>Done</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
