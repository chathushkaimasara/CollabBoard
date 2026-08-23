import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <div className="task-card" style={{ width: '400px', padding: '30px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In to CollabBoard</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button onClick={onLogin}>Log In</button>
          <p style={{ fontSize: '12px', textAlign: 'center', color: '#bbb' }}>
            Need an account? Register here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;