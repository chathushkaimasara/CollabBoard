
export const saveTasksToCache = (boardId, tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(`syncboard_tasks_${boardId}`, serializedTasks);
  } catch (error) {
    console.error('Could not save tasks to cache', error);
  }
};

export const loadTasksFromCache = (boardId) => {
  try {
    const cachedTasks = localStorage.getItem(`syncboard_tasks_${boardId}`);
    if (cachedTasks === null) return undefined;
    return JSON.parse(cachedTasks);
  } catch (error) {
    console.error('Could not load tasks from cache', error);
    return undefined;
  }
};

export const clearBoardCache = (boardId) => {
  try {
    localStorage.removeItem(`syncboard_tasks_${boardId}`);
  } catch (error) {
    console.error('Could not clear board cache', error);
  }
};