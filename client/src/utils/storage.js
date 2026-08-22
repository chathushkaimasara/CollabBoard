import localforage from 'localforage';

localforage.config({
  name: 'CollabBoard',
  storeName: 'tasks_cache'
});

export const saveTasksOffline = async (tasks) => {
  try {
    await localforage.setItem('offline_tasks', tasks);
  } catch (err) {
    console.error('Failed to save tasks to IndexedDB:', err);
  }
};

export const getTasksOffline = async () => {
  try {
    const tasks = await localforage.getItem('offline_tasks');
    return tasks || [];
  } catch (err) {
    console.error('Failed to load tasks from IndexedDB:', err);
    return [];
  }
};