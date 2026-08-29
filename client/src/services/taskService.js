const API_URL = 'http://localhost:5000/api/tasks/';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user?.token}`
  };
};

const getTasks = async (boardId) => {
  const response = await fetch(API_URL + boardId, {
    method: 'GET',
    headers: getAuthHeader(),
  });
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

const moveTask = async (taskId, newStatus) => {
  const response = await fetch(API_URL + taskId, {
    method: 'PUT',
    headers: getAuthHeader(),
    body: JSON.stringify({ status: newStatus }),
  });
  if (!response.ok) throw new Error('Failed to move task');
  return response.json();
};

export default { getTasks, moveTask };