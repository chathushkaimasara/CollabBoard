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

const createTask = async (taskData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create task');
  }
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

const deleteTask = async (taskId) => {
  const response = await fetch(API_URL + taskId, {
    method: 'DELETE',
    headers: getAuthHeader(),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete task');
  }
  return response.json();
};
export default { getTasks, createTask, moveTask, deleteTask };