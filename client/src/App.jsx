import React, { useState } from 'react';
import Login from './components/Login';
import Board from './components/Board';

function App() {
  const [showLogin, setShowLogin] = useState(true); 

  return (
    <div className="App">
      {showLogin ? (
        <Login onLogin={() => setShowLogin(false)} />
      ) : (
        <Board /> 
      )}
    </div>
  );
}

export default App;


