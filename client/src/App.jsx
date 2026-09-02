import React, { useState, useEffect } from 'react';
import BoardView from './components/BoardView';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setCurrentView('board');
    }
  }, []);

  if (currentView === 'board' || isAuthenticated) {
    return <BoardView />;
  }

  if (currentView === 'register') {
    return (
      <Register 
        onSwitchToLogin={() => setCurrentView('login')} 
        onAuthSuccess={() => {
          setIsAuthenticated(true);
          setCurrentView('board');
        }} 
      />
    );
  }

  return (
    <Login 
      onSwitchToRegister={() => setCurrentView('register')} 
      onAuthSuccess={() => {
        setIsAuthenticated(true);
        setCurrentView('board');
      }} 
    />
  );
}

export default App;