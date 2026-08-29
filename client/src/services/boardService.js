const API_URL = 'http://localhost:5000/api/boards/';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user?.token}`
  };
};

const getBoards = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: getAuthHeader(),
  });
  if (!response.ok) throw new Error('Failed to fetch boards');
  return response.json();
};

export default { getBoards };