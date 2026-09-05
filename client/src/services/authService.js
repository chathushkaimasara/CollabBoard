const API_URL = 'http://localhost:5000/api/auth/';

const register = async (username, email, password) => {
  const response = await fetch(API_URL + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
  }
  return data;
};


const login = async (email, password) => {
  const response = await fetch(API_URL + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

 
  if (data.token) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data;
};


const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};