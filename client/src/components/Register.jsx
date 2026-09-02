import React, { useState } from 'react';
import authService from '../services/authService';

const Register = ({ onSwitchToLogin, onAuthSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register({ name, email, password }); 
      onAuthSuccess();
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-20 h-20 bg-black rounded-[24px] mb-8 flex items-center justify-center shadow-xl">
         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight text-black mb-2 text-center">Create Account</h2>
      <p className="text-gray-400 font-medium mb-10 text-center">Join SyncBoard today</p>

      <form onSubmit={handleRegister} className="w-full max-w-sm">
        {error && (
          <div className="bg-white/50 border border-red-200 rounded-[20px] p-4 mb-6">
            <p className="text-red-500 text-sm font-bold text-center">{error}</p>
          </div>
        )}
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="bg-white rounded-[24px] p-1 shadow-sm border border-gray-100">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Full Name" 
              className="w-full bg-transparent px-5 py-4 outline-none text-[17px] font-medium text-black placeholder-gray-400"
              required 
            />
          </div>
          <div className="bg-white rounded-[24px] p-1 shadow-sm border border-gray-100">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email Address" 
              className="w-full bg-transparent px-5 py-4 outline-none text-[17px] font-medium text-black placeholder-gray-400"
              required 
            />
          </div>
          <div className="bg-white rounded-[24px] p-1 shadow-sm border border-gray-100">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              className="w-full bg-transparent px-5 py-4 outline-none text-[17px] font-medium text-black placeholder-gray-400"
              required 
            />
          </div>
        </div>
        
        <button type="submit" className="w-full bg-black text-white rounded-full py-4 font-bold text-[17px] hover:bg-gray-800 transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-[0.98] mb-6">
          Sign Up
        </button>

        <p className="text-center text-gray-500 font-medium text-[15px]">
          Already have an account?{' '}
          <button type="button" onClick={onSwitchToLogin} className="text-black font-bold hover:underline">
            Log in
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;